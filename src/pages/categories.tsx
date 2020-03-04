import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { CategoriesQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import Categories from '../components/Categories/Categories';
import Blockquote from '../components/Blockquote';
import ChecklistCard from '../components/ChecklistCard';

interface Props {
  data: CategoriesQuery;
}

const CategoriesPage: FC<Props> = ({ data }) => (
  <Layout>
    <section className="u-padding-top-xlarge u-padding-bottom-2xlarge">
      <h2>Checklist Categories</h2>
      <Categories categories={data.categories} />
    </section>
    <hr className="u-margin-ends-0 u-color-primary-900" />
    <section className="u-padding-ends-2xlarge">
      <h2 className="u-margin-bottom">Have you seen these checklists?</h2>
      <div className="row">
        <div className="col col--lg-6">
          <Blockquote>
            We have developed a protocol for anyone to suggest a checklist. We told you we have a
            protocol for almost everything!{' '}
            <span role="img" aria-labelledby="rocket">
              🚀
            </span>
          </Blockquote>
        </div>
      </div>
      <div className="row u-margin-top-medium">
        {/* TODO: Related checklists should be requested from the server */}
        <div className="col col--lg-6 u-margin-top-small">
          <ChecklistCard
            category="Front-End"
            categorySlug="front-end"
            todoCount={3}
            title="Releasing a Stage Project for a Web Project"
            description="At vero eos censes tantas res gessisse sine causa, mox videro; interea hoc epicurus in animis
          nostris inesse notionem."
            tags={['css', 'buttono']}
            slug="slug"
          />
        </div>
        <div className="col col--lg-6 u-margin-top-small">
          <ChecklistCard
            category="Front-End"
            categorySlug="front-end"
            todoCount={3}
            title="Releasing a Stage Project for a Web Project"
            description="At vero eos censes tantas res gessisse sine causa, mox videro; interea hoc epicurus in animis
          nostris inesse notionem."
            tags={['css', 'buttono']}
            slug="slug"
          />
        </div>
      </div>
    </section>
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
