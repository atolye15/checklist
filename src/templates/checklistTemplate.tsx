import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { ChecklistDetailQuery } from '../../graphql-types';

interface Props {
  data: ChecklistDetailQuery;
}

const ChecklistTemplate: FC<Props> = ({ data }) => {
  const { markdownRemark } = data;

  const frontmatter = markdownRemark?.frontmatter;

  if (!frontmatter || !frontmatter.title) {
    return null;
  }

  return (
    <h1>
      {frontmatter.title} ({markdownRemark?.fields?.todoCount})
    </h1>
  );
};

export const pageQuery = graphql`
  query ChecklistDetail($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
