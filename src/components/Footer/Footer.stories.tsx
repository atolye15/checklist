import React from 'react';

import Footer from './Footer';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Footer',
  decorators: [Wrapper],
};

export const defaultView = () => <Footer />;
