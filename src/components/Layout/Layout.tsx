import React, { FC, ReactNode } from 'react';
import cx from 'classnames';
import Helmet from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';

import SEO from '../../containers/SEO/SEO';
import Search from '../../containers/Search';

import '../../styles/main.scss';

interface Props {
  children: ReactNode;
  mainClassName?: string;
}

const Layout: FC<Props> = ({ children, mainClassName }) => {
  return (
    <>
      <Helmet
        titleTemplate="%s - Checklist"
        defaultTitle="Checklist"
        bodyAttributes={{ class: 'o-root' }}
      />
      <SEO />
      <Header search={<Search className="c-header-navbar__search" id="main-search" />} />
      <main className={cx('container', mainClassName)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
