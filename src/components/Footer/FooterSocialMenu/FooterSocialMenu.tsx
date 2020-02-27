import React, { FC } from 'react';
import cx from 'classnames';

import '../../links/LinkSecondary/c-link-secondary.scss';
import './c-footer-social-menu.scss';
import Icon from '../../Icon';

interface Props {
  className?: string;
}

const FooterSocialMenu: FC<Props> = ({ className }) => (
  <ul className={cx('c-footer-social-menu', className)}>
    <li className="c-footer-social-menu__item">
      <a
        href="https://www.instagram.com/atolye15/"
        className="c-link-secondary"
        aria-label="Instagram"
      >
        <Icon className="u-display-block" name="instagram" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a
        href="https://www.linkedin.com/company/at-lye15/"
        className="c-link-secondary"
        aria-label="LinkedIn"
      >
        <Icon className="u-display-block" name="linkedin" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a
        href="https://www.youtube.com/c/Atolye15"
        className="c-link-secondary"
        aria-label="YouTube"
      >
        <Icon className="u-display-block" name="youtube" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a href="https://github.com/atolye15" className="c-link-secondary" aria-label="Dribbble">
        <Icon className="u-display-block" name="github" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a href="https://www.behance.net/atolye15" className="c-link-secondary" aria-label="Behance">
        <Icon className="u-display-block" name="behance" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a href="https://dribbble.com/atolye15" className="c-link-secondary" aria-label="Behance">
        <Icon className="u-display-block" name="dribbble" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a href="https://medium.com/atolye15" className="c-link-secondary" aria-label="Medium">
        <Icon className="u-display-block" name="medium" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a href="https://www.meetup.com/atolye15/" className="c-link-secondary" aria-label="Meetup">
        <Icon className="u-display-block" name="meetup" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a href="https://twitter.com/atolye15" className="c-link-secondary" aria-label="Twitter">
        <Icon className="u-display-block" name="twitter" ariaHidden />
      </a>
    </li>
    <li className="c-footer-social-menu__item">
      <a
        href="https://www.facebook.com/atolye15"
        className="c-link-secondary"
        aria-label="Facebook"
      >
        <Icon className="u-display-block" name="facebook" ariaHidden />
      </a>
    </li>
  </ul>
);

export default FooterSocialMenu;
