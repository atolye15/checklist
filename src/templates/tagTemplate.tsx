import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { TagDetailQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import TagListContainer from '../containers/TagList';
import Checklists from '../components/Checklists';

interface TagTemplateContext {
  tag: string;
}

interface Props {
  data: TagDetailQuery;
  pageContext: TagTemplateContext;
}

const TagTemplate: FC<Props> = ({ data, pageContext }) => {
  const { checklists } = data;

  return (
    <Layout>
      <TagListContainer />
      <hr />
      <h1>#{pageContext.tag}</h1>
      {checklists.totalCount} Checklists
      <Link to="/">Go to home</Link>
      <Checklists items={checklists.nodes} />
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
