import React, { FC, ReactNode } from 'react';
import HeaderNavbar from './HeaderNavbar';

import './c-header.scss';

interface Props {
  search: ReactNode;
}

const Header: FC<Props> = ({ search }) => (
  <header className="c-header">
    <div className="container">
      <HeaderNavbar search={search} />
    </div>
  </header>
);

export default Header;
