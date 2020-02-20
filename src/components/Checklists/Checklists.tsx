import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { ChecklistFragment } from '../../../graphql-types';
import ChecklistCard from '../ChecklistCard';
import { Category } from '../../utils/category';

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
  <div className="container">
    <div className="row">
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {items.map(checklist => (
        <div className="col col--md-6 u-margin-top-small" key={checklist.fields?.slug || ''}>
          <ChecklistCard
            theme={checklist.fields?.categorySlug as Category}
            category={checklist.frontmatter?.category || ''}
            description={checklist.frontmatter?.description || ''}
            slug={checklist.fields?.slug || ''}
            tags={checklist.frontmatter?.tags as any}
            title={checklist.frontmatter?.title || ''}
            todoCount={checklist.fields?.todoCount || 0}
            categorySlug={checklist.fields?.categorySlug || ''}
          />
        </div>
      ))}
      {/* eslint-enable @typescript-eslint/no-explicit-any */}
    </div>
  </div>
);

export default Checklists;
