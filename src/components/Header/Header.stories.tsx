import React from 'react';

import Header from './Header';
import SearchBar from '../SearchBar/SeachBar';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Header',
  decorators: [Wrapper],
};

export const defaultView = () => (
  <Header search={<SearchBar id="main-search" className="c-header-navbar__search" />} />
);
