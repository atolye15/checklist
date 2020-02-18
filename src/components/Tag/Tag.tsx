import React, { FC } from 'react';
import { Link } from 'gatsby';

interface Props {
  tag: string;
  selected: boolean;
}

const Tag: FC<Props> = ({ tag, selected }) => (
  <Link to={`/tag/${tag}`}>
    {tag} {selected && <span>[x]</span>}
  </Link>
);

export default Tag;
