import React, { FC } from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';

import { ChecklistDetailQuery } from '../../graphql-types';

import ListItem from '../components/ListItem';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    li: ListItem,
  },
}).Compiler;

interface Props {
  data: ChecklistDetailQuery;
}

const ChecklistTemplate: FC<Props> = ({ data }) => {
  const { markdownRemark } = data;

  const frontmatter = markdownRemark?.frontmatter;

  if (!frontmatter || !frontmatter.title) {
    return null;
  }

  const html = renderAst(markdownRemark?.htmlAst);

  return (
    <>
      <h1>
        {frontmatter.title} ({markdownRemark?.fields?.todoCount})
      </h1>

      <hr />
      <div>{html}</div>
    </>
  );
};

export const pageQuery = graphql`
  query ChecklistDetail($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        tags
        category
      }
      fields {
        todoCount
      }
    }
  }
`;

export default ChecklistTemplate;
