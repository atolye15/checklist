import React, { FC } from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

import TagList from '../TagList';
import { Category } from '../../utils/category';

import './c-checklist-card.scss';

interface Props {
  category: string;
  todoCount: number;
  title: string;
  theme: Category;
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
  theme,
  tags,
  categorySlug,
}) => (
  <div className={cx('c-checklist-card', `c-checklist-card--theme-${theme}`)}>
    <div className="c-checklist-card__header">
      <Link to={`/category/${categorySlug}`} className="c-checklist-card__category-link">
        {category}
      </Link>
      <div>
        {todoCount} {todoCount === 1 ? <span>To-do</span> : <span>To-do&apos;s</span>}
      </div>
    </div>
    <div className="c-checklist-card__body">
      <Link to={`/checklist/${slug}`} className="c-checklist-card__title">
        {title}
      </Link>
      <p className="c-checklist-card__description">{description}</p>
      <TagList tags={tags} theme={theme} size="normal" className="u-margin-top-medium" />
    </div>
  </div>
);

export default ChecklistCard;
