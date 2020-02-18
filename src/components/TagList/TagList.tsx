import React, { FC } from 'react';

import Tag from '../Tag';

interface Props {
  tags: string[];
}

const TagList: FC<Props> = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </div>
);

export default TagList;
