import React from 'react';

import CategoryCard from './CategoryCard';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'CategoryCard',
  decorators: [Wrapper],
};

export const defaultView = () => (
  <CategoryCard
    title="Front-end"
    slug="front-end"
    checklistCount={33}
    description="These checklists ensures that we have standardized the both visual design and UX."
    tags={['css', 'buttono']}
  />
);
