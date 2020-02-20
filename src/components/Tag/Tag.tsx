import React, { FC } from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

import { Category } from '../../utils/category';

import './c-tag.scss';

export type TagSize = 'normal' | 'medium';

interface Props {
  tag: string;
  className?: string;
  selected: boolean;
  theme?: Category;
  size?: TagSize;
}

const Tag: FC<Props> = ({
  tag,
  selected,
  theme = 'default',
  size = 'normal',
  className,
}: Props) => (
  <Link
    to={`/tag/${tag}`}
    className={cx('c-tag', `c-tag--theme-${theme}`, `c-tag--size-${size}`, className)}
  >
    {tag} {selected && <span>[x]</span>}
  </Link>
);

export default Tag;
