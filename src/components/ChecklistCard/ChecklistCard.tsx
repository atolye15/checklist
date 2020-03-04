import React, { FC } from 'react';
import cx from 'classnames';

import { Category, categoryTheme } from '../../utils/category';
import TagList from '../TagList';
import LinkCategory from '../links/LinkCategory';
import Card, { CardHeader, CardTitle, CardFooter } from '../Card';

import './c-checklist-card.scss';

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
  <Card
    className={cx('c-checklist-card', className)}
    theme={categoryTheme[categorySlug] || 'default'}
  >
    <CardHeader>
      <div className="c-checklist-card__details">
        <LinkCategory className="c-checklist-card__category" category={categorySlug}>
          {category}
        </LinkCategory>

        {todoCount && (
          <span className="c-checklist-card__todo-count">
            {todoCount} To-Do{`${todoCount > 0 ? "'s" : ''}`}
          </span>
        )}
      </div>

      <CardTitle className="c-checklist-card__title" to={`/checklist/${slug}`}>
        {title}
      </CardTitle>
    </CardHeader>

    <p className="c-checklist-card__description">{description}</p>

    <CardFooter>
      <TagList
        tags={tags}
        theme={categoryTheme[categorySlug]}
        size="small"
        itemClassName="c-checklist-card__tag"
      />
    </CardFooter>
  </Card>
);

export default ChecklistCard;
