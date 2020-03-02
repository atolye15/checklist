import React, { FC, ReactNode } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import '../../styles/main.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>
      <div className="container">{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
