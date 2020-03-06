import React from 'react';

import IconButton from './IconButton';
import IconButtonAsLink from './IconButtonAsLink';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'Button/IconButton',
  decorators: [Wrapper],
};

export const normal = () => <IconButton iconName="arrow-right" />;
export const asLink = () => <IconButtonAsLink to="./" iconName="arrow-right" />;
