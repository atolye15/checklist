import React, { FC } from 'react';

import cx from 'classnames';

import './c-header-navbar.scss';
import Logo from '../../Logo';
import SearchBar from '../../SearchBar/SeachBar';
import HeaderNavbarMenu from './HeaderNavbarMenu';
import LinkLight from '../../links/LinkLight';

interface Props {
  className?: string;
}

const HeaderNavbar: FC<Props> = ({ className }) => (
  <nav className={cx('c-header-navbar', className)}>
    <div className="c-header-navbar__logo-area">
      <LinkLight to="./">
        <Logo />
      </LinkLight>
    </div>
    <SearchBar id="main-search" className="c-header-navbar__search" />
    <HeaderNavbarMenu className="c-header-navbar__menu" />
  </nav>
);

export default HeaderNavbar;
