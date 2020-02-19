import React, { FC } from 'react';
import { Link } from 'gatsby';
import TagList from '../TagList';

interface Props {
  title: string;
  slug: string;
  checklistCount: number;
  description: string;
  tags: string[];
}

const CategoryCard: FC<Props> = ({ title, slug, checklistCount, description, tags }) => (
  <div>
    <Link to={`/category/${slug}`}>{title}</Link>
    <br />
    {checklistCount} {checklistCount === 1 ? <span>Checklist</span> : <span>Checklists</span>}
    <br />
    {description}
    <TagList tags={tags} />
  </div>
);

export default CategoryCard;
