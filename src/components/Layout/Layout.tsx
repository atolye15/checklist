import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import Header from '../Header';
import Footer from '../Footer';

import '../../styles/main.scss';

interface Props {
  children: ReactNode;
  mainClassName?: string;
}

const Layout: FC<Props> = ({ children, mainClassName }) => (
  <>
    <Header />
    <main className={cx('container', mainClassName)}>{children}</main>
    <Footer />
  </>
);

export default Layout;
