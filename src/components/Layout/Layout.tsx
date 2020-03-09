import React, { FC, ReactNode } from 'react';
import cx from 'classnames';
import Helmet from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';

import SEO from '../../containers/SEO/SEO';
import Search from '../../containers/Search';

import '../../styles/main.scss';

import './o-main.scss';
import './o-header.scss';
import './o-footer.scss';

interface Props {
  children: ReactNode;
  mainClassName?: string;
}

const Layout: FC<Props> = ({ children, mainClassName }) => (
  <>
    <Helmet
      titleTemplate="%s - Checklist"
      defaultTitle="Checklist"
      bodyAttributes={{ class: 'o-root' }}
    />
    <SEO />
    <Header
      className="o-header"
      search={<Search className="c-header-navbar__search" id="main-search" />}
    />

    <main className={cx('o-main', mainClassName)}>{children}</main>
    <Footer className="o-footer" />
  </>
);

export default Layout;
