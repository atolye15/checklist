import React, { FC } from 'react';

import Tag from '../Tag';

import { Category } from '../../utils/category';
import { TagSize } from '../Tag/Tag';

import './c-tag-list.scss';

interface Props {
  tags: string[];
  theme?: Category;
  size?: TagSize;
  current?: string;
}

const TagList: FC<Props> = ({ tags, current, theme, size }) => (
  <div className="c-tag-list">
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
