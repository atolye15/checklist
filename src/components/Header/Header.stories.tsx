import React from 'react';

import Header from './Header';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Header',
  decorators: [Wrapper],
};

export const defaultView = () => <Header />;
