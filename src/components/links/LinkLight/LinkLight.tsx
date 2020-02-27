import React, { FC } from 'react';
import cx from 'classnames';

import { Link, GatsbyLinkProps } from 'gatsby';

import './c-link-light.scss';

interface Props extends Omit<GatsbyLinkProps<{}>, 'ref'> {
  className?: string;
}

const LinkLight: FC<Props> = ({ className, children, activeClassName = 'is-active', ...rest }) => (
  <Link className={cx('c-link-light', className)} activeClassName={activeClassName} {...rest}>
    {children}
  </Link>
);

export default LinkLight;
