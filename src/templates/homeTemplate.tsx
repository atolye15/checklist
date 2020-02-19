import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { HomePageQueryQuery } from '../../graphql-types';

import TagListContainer from '../containers/TagList';

import Layout from '../components/Layout';
import Checklists from '../components/Checklists';
import Pagination from '../components/Pagination';

interface HomePageContext {
  totalPages: number;
  currentPage: number;
}

interface Props {
  data: HomePageQueryQuery;
  pageContext: HomePageContext;
}

const Home: FC<Props> = ({ data, pageContext }) => {
  const { checklists } = data;

  return (
    <Layout>
      <TagListContainer />
      <hr />
      {checklists.totalCount} Checklists
      <Checklists items={checklists.nodes} />
      <Pagination totalPages={pageContext.totalPages} currentPage={pageContext.currentPage} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomePageQuery($skip: Int!, $limit: Int!) {
    checklists: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        ...Checklist
      }
    }
  }
`;

export default Home;
