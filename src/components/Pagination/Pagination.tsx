import React, { FC } from 'react';
import cx from 'classnames';

import IconLinkButton from '../Button/IconButton/IconLinkButton';

import './c-pagination.scss';

interface Props {
  totalPages: number;
  currentPage: number;
  className?: string;
}

const Pagination: FC<Props> = ({ className, totalPages, currentPage }) => (
  <nav className={cx('c-pagination', className)} aria-label="Checklists Navigation">
    {currentPage > 1 && (
      <IconLinkButton
        to={currentPage === 2 ? '/' : `/checklists/${currentPage - 1}`}
        className="c-pagination__previous"
        iconName="arrow-left"
        theme="tertiary"
        size="medium"
        aria-label="Previous checklists"
      />
    )}

    {totalPages > 1 && currentPage !== totalPages && (
      <IconLinkButton
        to={`/checklists/${currentPage + 1}`}
        className="c-pagination__next"
        iconName="arrow-right"
        theme="tertiary"
        size="medium"
        aria-label="Next checklists"
      />
    )}
  </nav>
);

export default Pagination;
