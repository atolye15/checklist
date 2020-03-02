import React from 'react';

import LinkCategory from './LinkCategory';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'LinkCategory',
  decorators: [Wrapper],
};

export const defaultView = () => <LinkCategory category="font-end" />;
export const medium = () => <LinkCategory category="font-end" size="medium" />;
