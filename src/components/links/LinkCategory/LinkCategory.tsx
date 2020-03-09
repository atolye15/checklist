import React, { FC } from 'react';
import cx from 'classnames';

import './c-link-category.scss';
import LinkSecondary from '../LinkSecondary';

interface Props {
  className?: string;
  category: string;
  size?: 'normal' | 'medium';
}

const LinkCategory: FC<Props> = ({ className, category, size = 'normal', children }) => (
  <LinkSecondary
    className={cx(
      'c-link-category',
      { [`c-link-category--size-${size}`]: size !== 'normal' },
      className,
    )}
    to={`/category/${category}`}
  >
    {children}
  </LinkSecondary>
);

export default LinkCategory;
