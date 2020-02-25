import React from 'react';

import LinkSecondary from './LinkSecondary';
import LinkWhite from './LinkWhite';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Links',
  decorators: [Wrapper],
};

export const secondary = () => <LinkSecondary to="./">Hello</LinkSecondary>;
export const white = () => <LinkWhite to="./">Hello</LinkWhite>;
