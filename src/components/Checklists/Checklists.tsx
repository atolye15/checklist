import React, { FC } from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';

import { ChecklistFragment } from '../../../graphql-types';
import ChecklistCard from '../ChecklistCard';
import { Category } from '../../utils/category';

interface Props {
  className?: string;
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

const Checklists: FC<Props> = ({ className, items }) => (
  <div className={cx('row', className)}>
    {items.map(checklist => (
      <div
        className="col col--md-6 u-margin-top-small u-display-flex"
        key={checklist.fields?.slug || ''}
      >
        <ChecklistCard
          className="u-flex-basis-100%"
          category={checklist.frontmatter?.category || ''}
          description={checklist.frontmatter?.description || ''}
          slug={checklist.fields?.slug || ''}
          tags={checklist.frontmatter?.tags as string[]}
          title={checklist.frontmatter?.title || ''}
          todoCount={checklist.fields?.todoCount || 0}
          categorySlug={checklist.fields?.categorySlug as Category}
        />
      </div>
    ))}
  </div>
);

export default Checklists;
