import React, { FC } from 'react';
import { Link } from 'gatsby';

import TagList from '../TagList';

interface Props {
  category: string;
  todoCount: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  categorySlug: string;
}

const ChecklistCard: FC<Props> = ({
  category,
  todoCount,
  title,
  slug,
  description,
  tags,
  categorySlug,
}) => (
  <div>
    <Link to={`/category/${categorySlug}`}>{category}</Link>
    <br />
    {todoCount} {todoCount === 1 ? <span>To-do</span> : <span>To-do&apos;s</span>}
    <br />
    <Link to={`/checklist/${slug}`}>{title}</Link>
    <br />
    {description}
    <TagList tags={tags} />
  </div>
);

export default ChecklistCard;
