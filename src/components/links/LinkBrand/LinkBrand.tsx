import React, { FC } from 'react';
import cx from 'classnames';

import { Link, GatsbyLinkProps } from 'gatsby';

import './c-link-brand.scss';

interface Props extends Omit<GatsbyLinkProps<{}>, 'ref'> {
  className?: string;
}

const LinkBrand: FC<Props> = ({ className, children, activeClassName = 'is-active', ...rest }) => (
  <Link className={cx('c-link-brand', className)} activeClassName={activeClassName} {...rest}>
    {children}
  </Link>
);

export default LinkBrand;
