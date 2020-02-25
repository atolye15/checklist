import React, { FC } from 'react';
import cx from 'classnames';

import { Theme } from '../../utils/theme';
import Tag, { TagSize } from '../Tag';

import './c-tag-list.scss';

interface Props {
  className?: string;
  itemClassName?: string;
  tags: string[];
  theme?: Theme;
  size?: TagSize;
  current?: string;
  prefix?: string;
}

const TagList: FC<Props> = ({
  className,
  itemClassName,
  tags,
  current,
  prefix = '#',
  size,
  theme,
}) => (
  <ul className={cx('c-tag-list', className)}>
    {tags.map(tag => (
      <li className={cx('c-tag-list__item', itemClassName)}>
        <Tag size={size} key={tag} theme={theme} to={`tag/${tag}`} active={tag === current}>
          {prefix}
          {tag}
        </Tag>
      </li>
    ))}
  </ul>
);

export default TagList;
