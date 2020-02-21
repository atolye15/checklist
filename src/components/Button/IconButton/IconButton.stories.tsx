import React from 'react';

import IconButton from './IconButton';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'Button/IconButton',
  decorators: [Wrapper],
};

export const normal = () => <IconButton iconName="arrow-right" />;
