import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { TagDetailQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import Checklists from '../components/Checklists';
import Icon from '../components/Icon';
import LinkLightAsAnchor from '../components/links/LinkLight/LinkLightAsAnchor';

import './o-checklists-heading.scss';
import './o-suggest-a-checklist.scss';
import SEO from '../containers/SEO';

interface TagTemplateContext {
  tag: string;
}

interface Props {
  data: TagDetailQuery;
  pageContext: TagTemplateContext;
}

const TagTemplate: FC<Props> = ({ data, pageContext }) => {
  const { checklists } = data;
  const { tag } = pageContext;

  return (
    <Layout>
      <SEO title={`#${tag}`} description={`The checklists that have been tagged under #${tag}`} />
      <div className="u-padding-ends-xlarge@md-up u-padding-large@sm-down">
        <div className="o-checklists-heading">
          <h2 className="u-margin-bottom-0">#{tag}</h2>
          <LinkLightAsAnchor
            className="o-suggest-a-checklist"
            href="https://github.com/atolye15/checklist/blob/master/CONTRIBUTING.md"
          >
            Suggest a Checklist{' '}
            <Icon className="o-suggest-a-checklist__icon" name="external-link" ariaHidden />
          </LinkLightAsAnchor>
        </div>
        <div className="u-text-style-large-body u-margin-top-xsmall">
          There {checklists.totalCount > 1 ? 'are' : 'is'} {checklists.totalCount} of them and
          counting!
        </div>
        <Checklists className="u-margin-top-small" items={checklists.nodes} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query TagDetail($tag: String!) {
    checklists: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        ...Checklist
      }
    }
  }
`;

export default TagTemplate;
