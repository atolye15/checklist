import React, { FC } from 'react';
import cx from 'classnames';

import TagList from '../TagList';
import Card, { CardHeader, CardTitle, CardFooter } from '../Card';
import { categoryTheme, Category } from '../../utils/category';

import './c-category-card.scss';

interface Props {
  className?: string;
  title: string;
  slug: Category;
  checklistCount: number;
  description: string;
  tags: string[];
}

const CategoryCard: FC<Props> = ({
  title,
  slug = 'default',
  checklistCount,
  description,
  className,
  tags,
}) => (
  <Card className={cx('c-category-card', className)} theme={categoryTheme[slug] || 'default'}>
    <CardHeader>
      <CardTitle className="c-category-card__title" to={`/category/${slug}`}>
        {title}
      </CardTitle>
    </CardHeader>
    <div className="c-category-card__checklist-count">
      {checklistCount} Checklist{`${checklistCount > 1 ? 's' : ''}`}
    </div>
    <p className="c-category-card__description">{description}</p>
    <CardFooter>
      <TagList
        tags={tags}
        theme={categoryTheme[slug]}
        size="small"
        itemClassName="c-category-card__tag"
      />
    </CardFooter>
  </Card>
);

export default CategoryCard;
