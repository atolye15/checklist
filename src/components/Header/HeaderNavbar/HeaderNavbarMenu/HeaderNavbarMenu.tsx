import React, { FC } from 'react';
import cx from 'classnames';

import LinkSecondary from '../../../links/LinkSecondary';
import Icon from '../../../Icon';

import './c-header-navbar-menu.scss';
import '../../../links/LinkBrand/c-link-brand.scss';
import '../../../links/LinkLight/c-link-light.scss';

interface Props {
  className?: string;
}

const HeaderNavbarMenu: FC<Props> = ({ className }) => (
  <ul className={cx('c-header-navbar-menu', className)}>
    <li className="c-header-navbar-menu__item">
      <LinkSecondary className="c-header-navbar-menu__link-text" to="/categories">
        Categories
      </LinkSecondary>
    </li>
    <li className="c-header-navbar-menu__item">
      <LinkSecondary className="c-header-navbar-menu__link-text" to="/about">
        About
      </LinkSecondary>
    </li>
    <li className="c-header-navbar-menu__item">
      <a
        href="https://github.com/atolye15/checklist/"
        className="c-link-light c-header-navbar-menu__link-icon"
      >
        <Icon name="github" className="u-display-block" />
      </a>
    </li>
    <li className="c-header-navbar-menu__item">
      <a href="https://www.atolye15.com/" className="c-link-brand c-header-navbar-menu__link-icon">
        <Icon name="atolye15-logo" className="u-display-block" />
      </a>
    </li>
  </ul>
);

export default HeaderNavbarMenu;
