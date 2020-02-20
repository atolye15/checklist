const query = `
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          description
          category
          tags
        }

        fields {
          slug
        }

        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest,
  }));

const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query,
    transformer: ({ data }) => flatten(data.allMarkdownRemark.edges),
    indexName: `checklists`,
    settings,
  },
];

module.exports = queries;
