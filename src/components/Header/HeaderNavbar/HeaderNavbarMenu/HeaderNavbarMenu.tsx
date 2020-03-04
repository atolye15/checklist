import React, { FC } from 'react';
import cx from 'classnames';

import LinkSecondary from '../../../links/LinkSecondary';
import Icon from '../../../Icon';
import LinkSecondaryAsAnchor from '../../../links/LinkSecondary/LinkSecondaryAsAnchor';
import LinkBrandAsAnchor from '../../../links/LinkBrand/LinkBrandAsAnchor';

import './c-header-navbar-menu.scss';

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
      <LinkSecondaryAsAnchor
        href="https://github.com/atolye15/checklist/"
        className="c-header-navbar-menu__link-icon"
      >
        <Icon name="github" className="u-display-block" />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-header-navbar-menu__item">
      <LinkBrandAsAnchor
        href="https://www.atolye15.com/"
        className="c-header-navbar-menu__link-icon"
      >
        <Icon name="atolye15-logo" className="u-display-block" />
      </LinkBrandAsAnchor>
    </li>
  </ul>
);

export default HeaderNavbarMenu;
