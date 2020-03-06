import React from 'react';
import SeachBar from './SeachBar';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 16, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Search Bar',
  decorators: [Wrapper],
};

export const defaultView = () => <SeachBar id="header-search" />;
