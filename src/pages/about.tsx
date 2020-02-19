import React, { FC } from 'react';

import Layout from '../components/Layout';

const About: FC = () => (
  <Layout>
    <h1>
      What is
      <br />
      Atölye15 Checklist
    </h1>

    <p>
      We love to automate anything if it can be automated. For the things we can’t automate (yet) we
      have a protocol. These protocols standardise our workflow so that everyone in Atölye15 works
      on a standard.
    </p>

    <p>
      We have been designing, developing & managing projects that vary in size for over 10 years
      now. Working on a different scale projects brought us some priceless experiences that led us
      to a greater success on the following projects. We updated our workflow, the way we work, even
      the hours we work. We try to adapt to the ongoing growth on technology and we are always on
      track with keeping our protocols updated.
    </p>

    <p>
      This was an internal tool that we still use on every department but we’ve decided to share
      this with the community so that we can help each other out, please feel free to suggest a
      checklist or an improvement on a checklist (on its own page). We will consider every
      suggestion and implement the ones that we think fits our needs and the way we work.
    </p>
  </Layout>
);

export default About;
