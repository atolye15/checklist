import React, { FC } from 'react';
import { graphql } from 'gatsby';
import slug from 'slug';

import { CategoriesQuery, MarkdownRemarkFrontmatter, Maybe } from '../../graphql-types';
import Layout from '../components/Layout';
import { getDescription } from '../utils/category';
import CategoryCard from '../components/CategoryCard';

interface Props {
  data: CategoriesQuery;
}

const getTags = (
  nodes: Array<{ frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'tags'>> }>,
): string[] => {
  const items: Record<string, number> = {};

  nodes.forEach(node => {
    if (!node.frontmatter) {
      return;
    }

    (node.frontmatter.tags || []).forEach(tag => {
      const tagName = tag || '';
      if (items[tagName]) {
        items[tagName] += 1;
        return;
      }

      items[tagName] = 1;
    });
  });

  return Object.entries(items)
    .sort((i1, i2) => i2[1] - i1[1])
    .map(i => i[0])
    .slice(0, 4);
};

const Categories: FC<Props> = ({ data }) => {
  const { categories } = data;
  const sortedCategories = categories.group
    .sort((c1, c2) => c2.totalCount - c1.totalCount)
    .map(c => ({
      title: c.fieldValue || '',
      slug: slug(c.fieldValue || '', { lower: true }),
      description: getDescription(c.fieldValue || ''),
      checklistCount: c.totalCount,
      tags: getTags(c.nodes),
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
