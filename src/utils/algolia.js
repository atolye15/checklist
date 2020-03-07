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
          categorySlug
          todoCount
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
    indexName: process.env.GATSBY_ALGOLIA_INDEX,
    settings,
  },
];

module.exports = queries;
