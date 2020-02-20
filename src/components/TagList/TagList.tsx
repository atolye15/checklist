import React, { FC } from 'react';

import Tag from '../Tag';

import './c-tag-list.scss';

interface Props {
  tags: string[];
  current?: string;
}

const TagList: FC<Props> = ({ tags, current }) => (
  <div className="c-tag-list">
    {tags.map(tag => (
      <Tag key={tag} tag={tag} selected={tag === current} className="c-tag-list__item" />
    ))}
  </div>
);

export default TagList;
