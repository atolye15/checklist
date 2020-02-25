import React from 'react';

import TagList from './TagList';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'TagList',
  decorators: [Wrapper],
};

export const defaultView = () => (
  <TagList tags={['css', 'pull-request', 'git', 'html']} theme="blue" />
);

export const small = () => (
  <TagList tags={['css', 'pull-request', 'git', 'html']} theme="blue" size="small" />
);
