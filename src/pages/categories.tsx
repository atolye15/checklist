import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import slug from 'slug';

import { CategoriesQuery } from '../../graphql-types';
import Layout from '../components/Layout';

interface Props {
  data: CategoriesQuery;
}

const Categories: FC<Props> = ({ data }) => {
  const { categories } = data;
  const sortedCategories = categories.group
    .sort((c1, c2) => c2.totalCount - c1.totalCount)
    .map(c => ({
      title: c.fieldValue,
      slug: slug(c.fieldValue || '', { lower: true }),
    }));

  return (
    <Layout>
      <h1>Categories</h1>
      {sortedCategories.map(category => (
        <div key={category.slug}>
          <Link to={`/category/${category.slug}`}>{category.title}</Link>
        </div>
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
      }
    }
  }
`;

export default Categories;
