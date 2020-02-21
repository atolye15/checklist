import React, { FC } from 'react';

import { Category } from '../../utils/category';

import './c-tag-list.scss';
import CategoryTagLink from '../CategoryTagLink';

interface Props {
  tags: string[];
  category?: Category;
  current?: string;
}

const TagList: FC<Props> = ({ tags, current, category }) => (
  <div className="c-tag-list">
    {tags.map(tag => (
      <CategoryTagLink
        key={tag}
        category={category}
        to={`tag/${tag}`}
        size="normal"
        active={tag === current}
        className="c-tag-list__item"
      />
    ))}
  </div>
);

export default TagList;
