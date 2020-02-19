import React, { FC } from 'react';

import Tag from '../Tag';

interface Props {
  tags: string[];
  current?: string;
}

const TagList: FC<Props> = ({ tags, current }) => (
  <div>
    {tags.map(tag => (
      <Tag key={tag} tag={tag} selected={tag === current} />
    ))}
  </div>
);

export default TagList;
