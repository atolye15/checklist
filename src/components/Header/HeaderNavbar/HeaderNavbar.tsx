import React, { FC, ReactNode } from 'react';

import cx from 'classnames';

import './c-header-navbar.scss';
import Logo from '../../Logo';
import HeaderNavbarMenu from './HeaderNavbarMenu';
import LinkLight from '../../links/LinkLight';

interface Props {
  className?: string;
  search: ReactNode;
}

const HeaderNavbar: FC<Props> = ({ className, search }) => (
  <nav className={cx('c-header-navbar', className)}>
    <div className="c-header-navbar__logo-area">
      <LinkLight to="/">
        <Logo />
      </LinkLight>
    </div>
    {search}
    <HeaderNavbarMenu className="c-header-navbar__menu" />
  </nav>
);

export default HeaderNavbar;
