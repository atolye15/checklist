import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { CategoriesQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import Categories from '../components/Categories/Categories';
import Blockquote from '../components/Blockquote';
import Checklists from '../components/Checklists';
import SEO from '../containers/SEO/SEO';

import './o-categories-section.scss';
import './o-suggested-checklists.scss';

interface Props {
  data: CategoriesQuery;
}

const CategoriesPage: FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      title="Categories"
      description="The list of categories that main focus areas of Atolye15 are included."
    />
    <section className="o-categories-section">
      <h2>Checklist Categories</h2>
      <Categories categories={data.categories} />
    </section>
    <hr className="u-margin-ends-0 u-color-primary-900" />
    <section className="o-suggested-checklists">
      <h2 className="u-margin-bottom">Have you seen these checklists?</h2>
      <div className="row">
        <div className="col col--md-9 col--lg-6">
          <Blockquote>
            We have developed a protocol for anyone to suggest a checklist. We told you we have a
            protocol for almost everything!{' '}
            <span role="img" aria-labelledby="rocket">
              🚀
            </span>
          </Blockquote>
        </div>
      </div>
      <Checklists items={data.suggestions.nodes} className="u-margin-top-medium" />
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query Categories {
    categories: allMarkdownRemark(limit: 1000) {
      ...CategoryList
    }

    suggestions: allMarkdownRemark(
      filter: { fields: { slug: { in: ["checklist-checklist", "improvement-checklist"] } } }
    ) {
      nodes {
        ...Checklist
      }
    }
  }
`;

export default CategoriesPage;
