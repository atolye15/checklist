import React, { FC } from 'react';
import { graphql } from 'gatsby';

import notFoundImage from '../images/404.svg';

import Layout from '../components/Layout';
import Blockquote from '../components/Blockquote';
import { NotFoundQuery } from '../../graphql-types';
import Checklists from '../components/Checklists';

interface Props {
  data: NotFoundQuery;
}

const NotFoundPage: FC<Props> = ({ data }) => (
  <Layout>
    <div className="row u-justify-content-center u-padding-top-xlarge u-padding-bottom-2xlarge">
      <div className="col col--lg-8 u-text-align-center">
        <div className="u-padding-bottom-medium">
          <img src={notFoundImage} alt="Content not found" width="712" height="519" />
        </div>

        <h1>Ooops...</h1>
        <p className="u-text-style-large-body">The page you are looking for is lost.</p>
      </div>
    </div>
    <hr className="u-margin-ends-0 u-color-primary-900" />
    <div className="u-padding-ends-2xlarge">
      <h2 className="u-margin-bottom-medium">Do you like what you see?</h2>
      <div className="row u-padding-bottom-large">
        <div className="col col--lg-6">
          <Blockquote>
            We have a checklist for both creating an illustration and for 404 pages. You should go
            ahead and check ‘em out!{' '}
            <span role="img" aria-labelledby="unicorn">
              🦄
            </span>
          </Blockquote>
        </div>
      </div>
      <Checklists items={data.suggestions.nodes} />
    </div>
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
