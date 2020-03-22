import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { HomePageQueryQuery } from '../../graphql-types';

import TagListContainer from '../containers/TagList';

import Layout from '../components/Layout';
import Checklists from '../components/Checklists';
import Pagination from '../components/Pagination';
import Icon from '../components/Icon';
import LinkLightAsAnchor from '../components/links/LinkLight/LinkLightAsAnchor';

import './o-checklists-heading.scss';
import './o-suggest-a-checklist.scss';
import './o-page-container.scss';

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
      <div className="o-page-container">
        <TagListContainer
          className="u-margin-bottom-xlarge@lg-up u-margin-bottom@md-down"
          limit={36}
        />

        <div className="o-checklists-heading">
          <h2 className="u-margin-bottom-0">Checklists</h2>

          <LinkLightAsAnchor
            className="o-suggest-a-checklist"
            target="_blank"
            rel="noopener noreferrer"
            href="https://git.io/JvDaH"
          >
            Suggest a Checklist{' '}
            <Icon className="o-suggest-a-checklist__icon" name="external-link" ariaHidden />
          </LinkLightAsAnchor>
        </div>
        <div className="u-text-style-large-body u-margin-top-xsmall">
          There are {checklists.totalCount} of them and counting!
        </div>
        <Checklists className="u-margin-top-small" items={checklists.nodes} />
        <Pagination totalPages={pageContext.totalPages} currentPage={pageContext.currentPage} />
      </div>
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
