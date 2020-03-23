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
      <LinkSecondary className="c-header-navbar-menu__link" to="/categories">
        Categories
      </LinkSecondary>
    </li>
    <li className="c-header-navbar-menu__item">
      <LinkSecondary className="c-header-navbar-menu__link" to="/about">
        About
      </LinkSecondary>
    </li>
    <li className="c-header-navbar-menu__item">
      <LinkSecondaryAsAnchor
        className="c-header-navbar-menu__link"
        href={process.env.GATSBY_GITHUB_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" className="c-header-navbar-menu__link-icon" ariaHidden />
        <span className="c-header-navbar-menu__link-label">Github</span>
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-header-navbar-menu__item">
      <LinkBrandAsAnchor
        className="c-header-navbar-menu__link"
        href="https://www.atolye15.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="atolye15-logo" className="c-header-navbar-menu__link-icon" ariaHidden />
        <span className="c-header-navbar-menu__link-label">Atolye15</span>
      </LinkBrandAsAnchor>
    </li>
  </ul>
);

export default HeaderNavbarMenu;
