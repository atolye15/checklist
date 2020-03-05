import React, { FC, ReactNode } from 'react';
import Helmet from 'react-helmet';
import cx from 'classnames';

import ogImage from '../../images/og-image.png';

import Header from '../Header';
import Footer from '../Footer';

import '../../styles/main.scss';

interface Props {
  children: ReactNode;
  mainClassName?: string;
}

const title = 'Checklist';
const description =
  'Checklist contains the protocols followed by Atolye15 for software development, design, project management and administrative affairs.';

const Layout: FC<Props> = ({ children, mainClassName }) => (
  <>
    <Helmet
      titleTemplate="%s - Checklist"
      defaultTitle={title}
      bodyAttributes={{ class: 'o-root' }}
    >
      <meta name="description" content={description} />

      <meta name="og:image" content={ogImage} />
      <meta name="og:site_name" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />

      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@atolye15" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="theme-color" content="#ff0c6f" />
    </Helmet>
    <Header />
    <main className={cx('container', mainClassName)}>{children}</main>
    <Footer />
  </>
);

export default Layout;
