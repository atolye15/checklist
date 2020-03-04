import React from 'react';

import notFoundImage from '../images/404.svg';

import Layout from '../components/Layout';
import Blockquote from '../components/Blockquote';
import ChecklistCard from '../components/ChecklistCard';

const NotFoundPage = () => (
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
      <div className="row">
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
    </div>
  </Layout>
);

export default NotFoundPage;
