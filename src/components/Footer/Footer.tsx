import React, { FC } from 'react';
import cx from 'classnames';

import atolye15Logo from '../../images/atolye15-logo.svg';

import '../links/LinkLight/c-link-light.scss';
import '../links/LinkSecondary/c-link-secondary.scss';
import './c-footer.scss';
import FooterSocialMenu from './FooterSocialMenu';
import LinkSecondary from '../links/LinkSecondary';
// import LinkSecondary from '../links/LinkSecondary';

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => (
  <footer className={cx('c-footer', className)}>
    <div className="container">
      <div className="row">
        <div className="col col--sm-6 u-padding-ends">
          <a href="./" className="c-footer__brand-logo-link c-link-light">
            <img className="c-footer__brand-logo" src={atolye15Logo} alt="Atölye15" />
          </a>
          <div className="u-font-weight-500">
            Top class outsource <br />
            Design &amp; Development
          </div>
          <nav className="c-footer__social-nav" aria-labelledby="social-menu-label">
            <h2 className="u-visually-hidden" id="social-menu-label">
              Atolye15 Social Menu
            </h2>
            <FooterSocialMenu />
          </nav>
        </div>
        <div className="col col--sm-6 col--md-3 u-padding-ends">
          <nav aria-labelledby="atolye15-menu-label">
            <h6 className="c-footer__title" id="atolye15-menu-label">
              Atolye15
            </h6>
            <ul className="c-footer__menu">
              <li className="u-margin-top-2xsmall">
                <a href="https://www.atolye15.com/about-us" className="c-link-secondary">
                  Get to Know Us
                </a>
              </li>
              <li className="u-margin-top-2xsmall">
                <a href="https://www.atolye15.com/events" className="c-link-secondary">
                  Explore Our Events
                </a>
              </li>
              <li className="u-margin-top-2xsmall">
                <a href="https://www.atolye15.com/career" className="c-link-secondary">
                  Open Positions
                </a>
              </li>
              <li className="u-margin-top-2xsmall">
                <a href="https://www.atolye15.com/contact" className="c-link-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col col--sm-6 col--md-3 u-padding-ends">
          <nav aria-labelledby="checklist-menu-label">
            <h6 className="c-footer__title" id="checklist-menu-label">
              Checklist
            </h6>
            <ul className="c-footer__menu">
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/about">About</LinkSecondary>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/code-of-conduct">Code Of Conduct</LinkSecondary>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/contributing">Contributing</LinkSecondary>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/checklist-checklist">Checklist Checklist</LinkSecondary>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/improvement-checklist">Improvement Checklist</LinkSecondary>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
