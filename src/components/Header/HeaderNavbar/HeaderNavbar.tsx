import React, { FC, useState, ReactNode } from 'react';

import cx from 'classnames';

import Logo from '../../Logo';
import HeaderNavbarMenu from './HeaderNavbarMenu';
import LinkLight from '../../links/LinkLight';
import LinkLightAsButton from '../../links/LinkLight/LinkLightAsButton/LinkLightAsButton';
import Icon from '../../Icon';

import './c-header-navbar.scss';

interface Props {
  className?: string;
  search: ReactNode;
}

const HeaderNavbar: FC<Props> = ({ className, search }) => {
  const [menuActive, setMenuActive] = useState(false);

  if (typeof document !== 'undefined') {
    document.body.classList.toggle('u-overflow-hidden', menuActive);
  }

  return (
    <nav className={cx('c-header-navbar', { 'is-menu-active': menuActive }, className)}>
      <div className="c-header-navbar__logo-area">
        <LinkLight className="c-header-navbar__logo-link" to="/">
          <Logo />
        </LinkLight>
      </div>
      {search}
      <HeaderNavbarMenu className={cx('c-header-navbar__menu', { 'is-active': menuActive })} />
      <LinkLightAsButton
        className="c-header-navbar__menu-action"
        onClick={() => setMenuActive(!menuActive)}
      >
        <Icon name={menuActive ? 'close' : 'menu'} />
      </LinkLightAsButton>
    </nav>
  );
};

export default HeaderNavbar;
