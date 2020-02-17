// eslint-disable-next-line @typescript-eslint/no-var-requires
const slug = require('slug');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const checklistTemplate = path.resolve(`src/templates/checklistTemplate.tsx`);

  const result = await graphql(`
    query AllChecklists {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }

            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/checklist/${node.fields.slug}`,
      component: checklistTemplate,
      context: {
        slug: node.fields.slug,
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
      const { title } = node.frontmatter;
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
    });
};
