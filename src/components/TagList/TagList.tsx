import React, { FC } from 'react';
import cx from 'classnames';

import Tag from '../Tag';

import { Category } from '../../utils/category';
import { TagSize } from '../Tag/Tag';

import './c-tag-list.scss';

interface Props {
  tags: string[];
  theme?: Category;
  size?: TagSize;
  current?: string;
  className?: string;
}

const TagList: FC<Props> = ({ tags, current, theme, size, className }) => (
  <div className={cx('c-tag-list', className)}>
    {tags.map(tag => (
      <Tag
        key={tag}
        tag={tag}
        theme={theme}
        size={size}
        selected={tag === current}
        className="c-tag-list__item"
      />
    ))}
  </div>
);

export default TagList;
