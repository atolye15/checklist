import React, { FC } from 'react';

import Layout from '../components/Layout';

import aboutImage from '../images/about.svg';
import Blockquote from '../components/Blockquote';
import ChecklistCard from '../components/ChecklistCard';
import ButtonAsAnchor from '../components/Button/ButtonAsAnchor';

const About: FC = () => (
  <Layout>
    <div className="row u-justify-content-center u-padding-top-xlarge u-padding-bottom-2xlarge">
      <div className="col col--lg-8">
        <div className="u-text-align-center u-padding-bottom-medium">
          <img src={aboutImage} alt="What is Checklist?" width="710" height="430" />
        </div>

        <h1 className="h2 u-margin-ends">
          What is <br /> Atolye15 Checklist
        </h1>

        <div className="u-text-style-subtitle">
          <p>
            We love to automate anything if it can be automated. For the things we can’t automate
            (yet) we have a protocol. These protocols standardise our workflow so that everyone in
            Atölye15 works on a standard.
          </p>

          <p>
            We have been designing, developing & managing projects that vary in size for over 10
            years now. Working on a different scale projects brought us some priceless experiences
            that led us to a greater success on the following projects. We updated our workflow, the
            way we work, even the hours we work. We try to adapt to the ongoing growth on technology
            and we are always on track with keeping our protocols updated.
          </p>

          <p>
            This was an internal tool that we still use on every department but we’ve decided to
            share this with the community so that we can help each other out, please feel free to
            suggest a checklist or an improvement on a checklist (on its own page). We will consider
            every suggestion and implement the ones that we think fits our needs and the way we
            work.
          </p>
        </div>

        <ButtonAsAnchor href="https://www.atolye15.com" className="u-margin-top-xlarge">
          atolye15.com
        </ButtonAsAnchor>
      </div>
    </div>
    <hr className="u-margin-ends-0 u-color-primary-900" />
    <div className="u-padding-ends-2xlarge">
      <h2 className="u-margin-bottom-medium">Check out these checklists before you go!</h2>
      <div className="row u-padding-bottom-large">
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

export default About;
