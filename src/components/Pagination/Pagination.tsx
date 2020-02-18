import React, { FC } from 'react';
import { Link } from 'gatsby';

interface Props {
  totalPages: number;
  currentPage: number;
}

const Pagination: FC<Props> = ({ totalPages, currentPage }) => (
  <div>
    {currentPage === 2 && <Link to="/">Previous checklists</Link>}
    {currentPage > 2 && <Link to={`/checklists/${currentPage - 1}`}>Previous checklists</Link>}
    <br />
    {totalPages > 1 && currentPage !== totalPages && (
      <Link to={`/checklists/${currentPage + 1}`}>Next checklists</Link>
    )}
  </div>
);

export default Pagination;
