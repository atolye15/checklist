import React, { FC } from 'react';
import cx from 'classnames';

import { Category, categoryTheme } from '../../utils/category';

import './c-search-card.scss';
import LinkLight from '../links/LinkLight';
import TagList from '../TagList';

export interface Props {
  className?: string;
  category: string;
  categorySlug?: Category;
  todoCount: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

const SearchCard: FC<Props> = ({
  className,
  onClick,
  title,
  category,
  categorySlug = 'default',
  slug,
  todoCount,
  tags,
}) => (
  <div className={cx('c-search-card', className)}>
    <div className="c-search-card__category">{category}</div>

    <h5 className={cx('c-search-card__title', className)}>
      <LinkLight onClick={onClick} className="c-search-card__title-link" to={`/checklist/${slug}`}>
        {title}
      </LinkLight>
    </h5>

    <div className="c-search-card__todo-count">
      {todoCount} To-Do{`${todoCount > 1 ? "'s" : ''}`}
    </div>

    <TagList
      tags={tags}
      theme={categoryTheme[categorySlug]}
      size="small"
      itemClassName="c-search-card__tag"
      className="u-margin-top-small"
    />
  </div>
);

export default SearchCard;
