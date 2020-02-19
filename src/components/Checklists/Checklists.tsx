import React, { FC, Fragment } from 'react';
import { graphql } from 'gatsby';

import { ChecklistFragment } from '../../../graphql-types';
import ChecklistCard from '../ChecklistCard';

interface Props {
  items: ChecklistFragment[];
}

export const checklistDetailFragment = graphql`
  fragment Checklist on MarkdownRemark {
    frontmatter {
      title
      category
      tags
      description
    }
    fields {
      slug
      categorySlug
      todoCount
    }
  }
`;

const Checklists: FC<Props> = ({ items }) => (
  <div>
    {/* eslint-disable @typescript-eslint/no-explicit-any */}
    {items.map(checklist => (
      <Fragment key={checklist.fields?.slug || ''}>
        <ChecklistCard
          category={checklist.frontmatter?.category || ''}
          description={checklist.frontmatter?.description || ''}
          slug={checklist.fields?.slug || ''}
          tags={checklist.frontmatter?.tags as any}
          title={checklist.frontmatter?.title || ''}
          todoCount={checklist.fields?.todoCount || 0}
          categorySlug={checklist.fields?.categorySlug || ''}
        />
        <hr />
      </Fragment>
    ))}
    {/* eslint-enable @typescript-eslint/no-explicit-any */}
  </div>
);

export default Checklists;
