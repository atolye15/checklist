import React from 'react';

import Logo from './Logo';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Logo',
  decorators: [Wrapper],
};

export const defaultView = () => <Logo />;
