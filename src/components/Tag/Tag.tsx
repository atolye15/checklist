import React, { FC } from 'react';
import { Link } from 'gatsby';

interface Props {
  tag: string;
}

const Tag: FC<Props> = ({ tag }) => <Link to={`/tag/${tag}`}>{tag}</Link>;

export default Tag;
