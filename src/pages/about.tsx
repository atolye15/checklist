import React, { FC } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import aboutImage from '../images/about.svg';
import Blockquote from '../components/Blockquote';
import ButtonAsAnchor from '../components/Button/ButtonAsAnchor';

import { AboutQuery } from '../../graphql-types';
import Checklists from '../components/Checklists';
import SEO from '../containers/SEO/SEO';

import './o-about-section.scss';
import './o-related-checklists.scss';

interface Props {
  data: AboutQuery;
}

const About: FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="About" />

    <div className="row o-about-section">
      <section className="col col--md-10 col--lg-8">
        <div className="u-text-align-center u-padding-bottom-xlarge">
          <img className="u-img-fluid" src={aboutImage} alt="What is Checklist?" width="710" />
        </div>

        <h1 className="h2 u-margin-bottom">
          What is <br /> Atolye15 Checklist
        </h1>

        <p>
          We love to automate anything if it can be automated. For the things we can’t automate
          (yet) we have a protocol. These protocols standardise our workflow so that everyone in
          Atölye15 works on a standard.
        </p>

        <p>
          We have been designing, developing & managing projects that vary in size for over 10 years
          now. Working on a different scale projects brought us some priceless experiences that led
          us to a greater success on the following projects. We updated our workflow, the way we
          work, even the hours we work. We try to adapt to the ongoing growth on technology and we
          are always on track with keeping our protocols updated.
        </p>

        <p>
          This was an internal tool that we still use on every department but we’ve decided to share
          this with the community so that we can help each other out, please feel free to suggest a
          checklist or an improvement on a checklist (on its own page). We will consider every
          suggestion and implement the ones that we think fits our needs and the way we work.
        </p>

        <ButtonAsAnchor
          href="https://www.atolye15.com"
          className="u-margin-top-xlarge u-width-100%@sm-down"
          target="_blank"
          rel="noopener noreferrer"
        >
          atolye15.com
        </ButtonAsAnchor>
      </section>
    </div>
    <hr className="u-margin-ends-0 u-color-primary-900" />
    <section className="o-related-checklists">
      <h2 className="u-margin-bottom">Check out these checklists before you go!</h2>
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
  query About {
    suggestions: allMarkdownRemark(
      filter: {
        fields: {
          slug: { in: ["suggesting-a-checklist", "suggesting-an-improvement-on-a-checklist"] }
        }
      }
    ) {
      nodes {
        ...Checklist
      }
    }
  }
`;

export default About;
