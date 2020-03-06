import React, { FC } from 'react';
import cx from 'classnames';

import { Link, GatsbyLinkProps } from 'gatsby';

import './c-link-secondary.scss';

interface Props extends Omit<GatsbyLinkProps<{}>, 'ref'> {
  className?: string;
}

const LinkSecondary: FC<Props> = ({
  className,
  children,
  activeClassName = 'is-active',
  ...rest
}) => (
  <Link className={cx('c-link-secondary', className)} activeClassName={activeClassName} {...rest}>
    {children}
  </Link>
);

export default LinkSecondary;
