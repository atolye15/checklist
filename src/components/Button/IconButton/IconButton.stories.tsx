import React from 'react';

import IconButton from './IconButton';
import IconLinkButton from './IconLinkButton';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'Button/IconButton',
  decorators: [Wrapper],
};

export const normal = () => <IconButton iconName="arrow-right" />;
export const asLink = () => <IconLinkButton to="./" iconName="arrow-right" />;
