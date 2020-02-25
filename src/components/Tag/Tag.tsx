import React, { FC } from 'react';
import cx from 'classnames';
import { Link, GatsbyLinkProps } from 'gatsby';

import { Theme } from '../../utils/theme';
import './c-tag.scss';

export type TagSize = 'normal' | 'small';

type Props = Omit<GatsbyLinkProps<{}>, 'ref'> & {
  theme?: Theme;
  size?: TagSize;
  active?: boolean;
};

const Tag: FC<Props> = ({
  className,
  children,
  theme = 'default',
  size = 'normal',
  active,
  ...rest
}) => (
  <Link
    className={cx(
      'c-tag',
      `c-tag--theme-${theme}`,
      `c-tag--size-${size}`,
      { 'is-active': active },
      className,
    )}
    {...rest}
  >
    {children}
  </Link>
);

export default Tag;
