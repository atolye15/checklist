import React, { FC } from 'react';
import { graphql } from 'gatsby';
import slug from 'slug';

import { CategoriesQuery } from '../../graphql-types';
import { getDescription, getMostUsedTags } from '../utils/category';

import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';

interface Props {
  data: CategoriesQuery;
}

const Categories: FC<Props> = ({ data }) => {
  const { categories } = data;
  const sortedCategories = categories.group
    .sort((c1, c2) => c2.totalCount - c1.totalCount)
    .map(c => ({
      title: c.fieldValue || '',
      slug: slug(c.fieldValue || '', { lower: true }),
      description: getDescription(c.fieldValue || ''),
      checklistCount: c.totalCount,
      tags: getMostUsedTags(c.nodes),
    }));

  return (
    <Layout>
      <h1>Categories</h1>
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
    </Layout>
  );
};

export const pageQuery = graphql`
  query Categories {
    categories: allMarkdownRemark(limit: 1000) {
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
  }
`;

export default Categories;
