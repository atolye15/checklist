import React, { FC } from 'react';
import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';

import { TagsQueryQuery } from '../../../graphql-types';

import TagList from '../../components/TagList';

import './o-page-taglist.scss';

interface Props {
  className?: string;
  current?: string;
  limit?: number;
}

const TagListContainer: FC<Props> = ({ current, className, limit }) => {
  const data: TagsQueryQuery = useStaticQuery(graphql`
    query TagsQuery {
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  const sortedTags = data.tags.group.sort((t1, t2) => t2.totalCount - t1.totalCount);

  return (
    <TagList
      tags={sortedTags.map(t => t.tag || '').slice(0, limit)}
      current={current}
      className={cx('o-page-taglist', className)}
    />
  );
};

export default TagListContainer;
