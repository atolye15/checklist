import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { CategoriesQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import Categories from '../components/Categories/Categories';

interface Props {
  data: CategoriesQuery;
}

const CategoriesPage: FC<Props> = ({ data }) => (
  <Layout>
    <h1>Categories</h1>
    <Categories categories={data.categories} />
  </Layout>
);

export const pageQuery = graphql`
  query Categories {
    categories: allMarkdownRemark(limit: 1000) {
      ...CategoryList
    }
  }
`;

export default CategoriesPage;
