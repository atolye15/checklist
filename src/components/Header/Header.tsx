import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import HeaderNavbar from './HeaderNavbar';

import './c-header.scss';

interface Props {
  className?: string;
  search: ReactNode;
}

const Header: FC<Props> = ({ className, search }) => (
  <header className={cx('c-header', className)}>
    <div className="container">
      <HeaderNavbar search={search} />
    </div>
  </header>
);

export default Header;
