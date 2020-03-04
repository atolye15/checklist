import { graphql } from 'gatsby';
import React, { FC } from 'react';
import slug from 'slug';

import { CategoryListFragment } from '../../../graphql-types';
import { getDescription, getMostUsedTags, Category } from '../../utils/category';
import CategoryCard from '../CategoryCard';

export const categoriesFragment = graphql`
  fragment CategoryList on MarkdownRemarkConnection {
    group(field: frontmatter___category) {
      fieldValue
      totalCount

      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;

interface Props {
  categories: CategoryListFragment;
  current?: string;
}

const Categories: FC<Props> = ({ categories, current }) => {
  const sortedCategories = categories.group
    .sort((c1, c2) => c2.totalCount - c1.totalCount)
    .map(c => ({
      title: c.fieldValue || '',
      slug: slug(c.fieldValue || '', { lower: true }),
      description: getDescription(c.fieldValue || ''),
      checklistCount: c.totalCount,
      tags: getMostUsedTags(c.nodes),
    }))
    .filter(c => c.title !== current);

  return (
    <div className="row">
      {sortedCategories.map(category => (
        <div className="col col--lg-3 u-display-flex u-margin-top-small" key={category.slug}>
          <CategoryCard
            title={category.title}
            slug={category.slug as Category}
            checklistCount={category.checklistCount}
            description={category.description}
            tags={category.tags}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
