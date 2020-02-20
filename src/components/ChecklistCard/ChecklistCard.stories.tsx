import React from 'react';

import ChecklistCard from './ChecklistCard';

export default {
  component: ChecklistCard,
  title: 'ChecklistCard',
};

export const withDefault = () => (
  <ChecklistCard
    category="deneme"
    todoCount={2}
    title="Deneme"
    theme="project-management"
    slug="1"
    description="description"
    tags={['tag-1', 'tag-2']}
    categorySlug="2"
  />
);
