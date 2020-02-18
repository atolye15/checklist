import React, { FC, Fragment } from 'react';
import { graphql } from 'gatsby';

import { HomePageQueryQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import ChecklistCard from '../components/ChecklistCard';
import TagList from '../components/TagList';

interface Props {
  data: HomePageQueryQuery;
}

const Home: FC<Props> = ({ data }) => {
  const { checklists, tags } = data;

  const sortedTags = tags.group.sort((t1, t2) => t2.totalCount - t1.totalCount);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <Layout>
      <TagList tags={sortedTags.map(t => t.tag || '')} />
      <hr />
      {checklists.totalCount} Checklists
      {checklists.nodes.map(checklist => (
        <Fragment key={checklist.fields?.slug || ''}>
          <ChecklistCard
            category={checklist.frontmatter?.category || ''}
            description={checklist.excerpt || ''}
            slug={checklist.fields?.slug || ''}
            tags={checklist.frontmatter?.tags as any}
            title={checklist.frontmatter?.title || ''}
            todoCount={checklist.fields?.todoCount || 0}
          />
          <hr />
        </Fragment>
      ))}
    </Layout>
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */
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
        excerpt
        frontmatter {
          title
          category
          tags
        }
        fields {
          slug
          todoCount
        }
      }
    }

    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export default Home;
