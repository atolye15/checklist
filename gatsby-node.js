// eslint-disable-next-line @typescript-eslint/no-var-requires
const slug = require('slug');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const homeTemplate = path.resolve(`src/templates/homeTemplate.tsx`);
  const checklistTemplate = path.resolve(`src/templates/checklistTemplate.tsx`);
  const tagTemplate = path.resolve(`src/templates/tagTemplate.tsx`);
  const categoryTemplate = path.resolve(`src/templates/categoryTemplate.tsx`);

  const result = await graphql(`
    query AllChecklists {
      checklists: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }

            frontmatter {
              title
              category
            }
          }
        }
      }

      tags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      categories: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
  }

  const { edges: checklists } = result.data.checklists;

  // Home pagination
  const checklistPerPage = 2;
  const totalPages = Math.ceil(checklists.length / checklistPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/checklists/${i + 1}`,
      component: homeTemplate,
      context: {
        limit: checklistPerPage,
        skip: i * checklistPerPage,
        totalPages,
        currentPage: i + 1,
      },
    });
  });

  // Checklist details
  checklists.forEach(({ node }) => {
    createPage({
      path: `/checklist/${node.fields.slug}`,
      component: checklistTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // Tag Details
  result.data.tags.group.forEach(tag => {
    createPage({
      path: `/tag/${tag.fieldValue}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  // Category Details
  result.data.categories.group.forEach(category => {
    const categorySlug = slug(category.fieldValue, { lower: true });

    createPage({
      path: `/category/${categorySlug}`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ actions, getNodes }) => {
  const { createNodeField } = actions;
  const nodes = getNodes();

  nodes
    .filter(n => n.internal.type === 'MarkdownRemark')
    .forEach(node => {
      const { title, category } = node.frontmatter;
      const todoCount = (node.rawMarkdownBody || '').match(/- \[ ] (.*)/g).length;

      createNodeField({
        node,
        name: 'slug',
        value: slug(title, { lower: true }),
      });

      createNodeField({
        node,
        name: 'todoCount',
        value: todoCount,
      });

      createNodeField({
        node,
        name: 'categorySlug',
        value: slug(category, { lower: true }),
      });
    });
};
