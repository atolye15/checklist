import React, { FC } from 'react';

import LinkLight from '../../components/links/LinkLight';
import { Category, categoryTheme } from '../../utils/category';
import TagList from '../../components/TagList';

export interface ChecklistHit {
  title: string;
  description: string;
  category: string;
  categorySlug: Category;
  todoCount: number;
  tags: string[];
  slug: string;
  excerpt: string;
  objectID: string;
}

interface Props {
  hit: ChecklistHit;
  onClick: () => void;
}

const Hit: FC<Props> = ({ hit, onClick }) => (
  <div className="c-search-hit">
    <div className="c-search-hit__category">{hit.category}</div>

    <LinkLight onClick={onClick} className="c-search-hit__link" to={`/checklist/${hit.slug}`}>
      {hit.title}
    </LinkLight>

    <span className="c-search-hit__todo-count">
      {hit.todoCount} To-Do{`${hit.todoCount > 1 ? "'s" : ''}`}
    </span>

    <TagList
      tags={hit.tags}
      theme={categoryTheme[hit.categorySlug]}
      size="small"
      className="u-margin-top-small"
    />
  </div>
);

export default Hit;
