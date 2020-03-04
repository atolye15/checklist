import React, { FC } from 'react';
import cx from 'classnames';

import Icon from '../../Icon';
import LinkSecondaryAsAnchor from '../../links/LinkSecondary/LinkSecondaryAsAnchor';

import './c-footer-social-menu.scss';

interface Props {
  className?: string;
}

const FooterSocialMenu: FC<Props> = ({ className }) => (
  <ul className={cx('c-footer-social-menu', className)}>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://www.instagram.com/atolye15/" aria-label="Instagram">
        <Icon className="u-display-block" name="instagram" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.linkedin.com/company/at-lye15/"
        aria-label="LinkedIn"
      >
        <Icon className="u-display-block" name="linkedin" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://www.youtube.com/c/Atolye15" aria-label="YouTube">
        <Icon className="u-display-block" name="youtube" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://github.com/atolye15" aria-label="Dribbble">
        <Icon className="u-display-block" name="github" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://www.behance.net/atolye15" aria-label="Behance">
        <Icon className="u-display-block" name="behance" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://dribbble.com/atolye15" aria-label="Behance">
        <Icon className="u-display-block" name="dribbble" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://medium.com/atolye15" aria-label="Medium">
        <Icon className="u-display-block" name="medium" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://www.meetup.com/atolye15/" aria-label="Meetup">
        <Icon className="u-display-block" name="meetup" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://twitter.com/atolye15" aria-label="Twitter">
        <Icon className="u-display-block" name="twitter" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor href="https://www.facebook.com/atolye15" aria-label="Facebook">
        <Icon className="u-display-block" name="facebook" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
  </ul>
);

export default FooterSocialMenu;
