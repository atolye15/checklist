import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';

import { CategoryDetailQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import Checklists from '../components/Checklists';
import TagList from '../components/TagList';

interface CategoryTemplateContext {
  category: string;
}

interface Props {
  data: CategoryDetailQuery;
  pageContext: CategoryTemplateContext;
}

const CategoryTemplate: FC<Props> = ({ data, pageContext }) => {
  const { checklists } = data;

  const sortedTags = checklists.tags.sort((t1, t2) => t2.totalCount - t1.totalCount);

  return (
    <Layout>
      <h1>{pageContext.category}</h1>
      <TagList tags={sortedTags.map(t => t.tag || '')} />
      {checklists.totalCount} Checklists
      <Link to="/">Go to home</Link>
      <Checklists items={checklists.nodes} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryDetail($category: String!) {
    checklists: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      nodes {
        ...Checklist
      }

      tags: group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export default CategoryTemplate;
