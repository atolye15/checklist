import { graphql } from 'gatsby';
import React, { FC } from 'react';
import slug from 'slug';

import { getDescription, getMostUsedTags } from '../../utils/category';
import CategoryCard from '../CategoryCard';
import { CategoryListFragment } from '../../../graphql-types';

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
    <div>
      {sortedCategories.map(category => (
        <CategoryCard
          key={category.slug}
          title={category.title}
          slug={category.slug}
          checklistCount={category.checklistCount}
          description={category.description}
          tags={category.tags}
        />
      ))}
    </div>
  );
};

export default Categories;
