import React from 'react';

import ChecklistCard from './ChecklistCard';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'ChecklistCard',
  decorators: [Wrapper],
};

export const defaultView = () => (
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
);
