import React, { FC } from 'react';
import HeaderNavbar from './HeaderNavbar';

import './c-header.scss';

const Header: FC = () => (
  <header className="c-header">
    <div className="container">
      <HeaderNavbar />
    </div>
  </header>
);

export default Header;
