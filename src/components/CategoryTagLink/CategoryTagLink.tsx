import React, { FC } from 'react';
import cx from 'classnames';
import { Link, GatsbyLinkProps } from 'gatsby';

import { Category } from '../../utils/category';
import './c-category-tag-link.scss';

type Props = Omit<GatsbyLinkProps<{}>, 'ref'> & {
  category?: Category;
  size?: 'normal' | 'small';
  active?: boolean;
};

const CategoryTagLink: FC<Props> = ({
  className,
  children,
  category = 'default',
  size = 'normal',
  active,
  ...rest
}) => (
  <Link
    className={cx(
      'c-category-tag-link',
      `c-category-tag-link--${category}`,
      `c-category-tag-link--size-${size}`,
      { 'is-active': active },
      className,
    )}
    {...rest}
  >
    {children}
  </Link>
);

export default CategoryTagLink;
