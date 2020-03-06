import React, { FC } from 'react';
import { graphql } from 'gatsby';

import notFoundImage from '../images/404.svg';

import Layout from '../components/Layout';
import Blockquote from '../components/Blockquote';
import { NotFoundQuery } from '../../graphql-types';
import Checklists from '../components/Checklists';
import SEO from '../containers/SEO';

import './o-not-found-section.scss';
import './o-related-checklists.scss';

interface Props {
  data: NotFoundQuery;
}

const NotFoundPage: FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Ooops..." />
    <div className="row o-not-found-section">
      <div className="col col--md-10 col--lg-8 u-text-align-center">
        <div className="u-padding-bottom-large">
          <img className="u-img-fluid" src={notFoundImage} alt="Content not found" width="712" />
        </div>

        <h1>Ooops...</h1>
        <p className="u-text-style-large-body">The page you are looking for is lost.</p>
      </div>
    </div>
    <hr className="u-margin-ends-0 u-color-primary-900" />
    <section className="o-related-checklists">
      <h2 className="u-margin-bottom">Have you seen these checklists?</h2>
      <div className="row">
        <div className="col col--md-9 col--lg-6">
          <Blockquote>
            We have a checklist for both creating an illustration and for 404 pages. You should go
            ahead and check ‘em out!{' '}
            <span role="img" aria-labelledby="unicorn">
              🦄
            </span>
          </Blockquote>
        </div>
      </div>
      <Checklists items={data.suggestions.nodes} className="u-margin-top-medium" />
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query NotFound {
    suggestions: allMarkdownRemark(
      filter: { fields: { slug: { in: ["creating-a-404-page", "creating-illustrations"] } } }
    ) {
      nodes {
        ...Checklist
      }
    }
  }
`;

export default NotFoundPage;
