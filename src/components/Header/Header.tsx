import React, { FC } from 'react';
import cx from 'classnames';
import HeaderNavbar from './HeaderNavbar';

import './c-header.scss';

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => (
  <header className={cx('c-header', className)}>
    <div className="container">
      <HeaderNavbar />
    </div>
  </header>
);

export default Header;
