import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TagDetailQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import TagListContainer from '../containers/TagList';
import Checklists from '../components/Checklists';
import Icon from '../components/Icon';

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
      <div className="u-padding-ends-xlarge">
        <TagListContainer current={tag} />

        <div className="o-checklists-heading">
          <h2 className="u-margin-bottom-0">#{tag}</h2>
          <a
            className="c-link-light o-suggest-a-checklist"
            href="https://github.com/atolye15/checklist/blob/master/CONTRIBUTING.md"
          >
            Suggest a Checklist{' '}
            <Icon className="o-suggest-a-checklist__icon" name="external-link" ariaHidden />
          </a>
        </div>
        <div className="u-text-style-large-body">
          There are {checklists.totalCount} of them and counting!
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
