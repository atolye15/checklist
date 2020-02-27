import React, { FC } from 'react';
import cx from 'classnames';

import { Category, categoryTheme } from '../../utils/category';
import LinkSecondary from '../links/LinkSecondary';
import TagList from '../TagList';
import './c-checklist-card.scss';
import LinkLight from '../links/LinkLight';

type Props = {
  className?: string;
  category: string;
  categorySlug?: Category;
  todoCount: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
};

const ChecklistCard: FC<Props> = ({
  className,
  category,
  categorySlug = 'default',
  todoCount,
  title,
  description,
  slug,
  tags,
}) => (
  <div
    className={cx(
      'c-checklist-card',
      `c-checklist-card--theme-${categoryTheme[categorySlug] || 'default'}`,
      className,
    )}
  >
    <header className={cx('c-checklist-card__header', className)}>
      <div className="c-checklist-card__details">
        <LinkSecondary className="c-checklist-card__category" to={`/category/${categorySlug}`}>
          {category}
        </LinkSecondary>
        {todoCount && (
          <span className="c-checklist-card__todo-count">
            {todoCount} To-Do{`${todoCount > 0 ? "'s" : ''}`}
          </span>
        )}
      </div>

      <h4 className="c-checklist-card-header__title">
        <LinkLight className="c-checklist-card__title-link" to={`/checklist/${slug}`}>
          {title}
        </LinkLight>
      </h4>
    </header>
    <p className="c-checklist-card__description">{description}</p>
    <footer className="c-checklist-card__footer">
      <TagList
        tags={tags}
        theme={categoryTheme[categorySlug]}
        size="small"
        itemClassName="c-checklist-card__tag"
      />
    </footer>
  </div>
);

export default ChecklistCard;
