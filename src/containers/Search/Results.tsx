import React, { FC, ReactNode } from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import { StateResultsProvided } from 'react-instantsearch-core';

import NoResult from './NoResult';

interface Props {
  children: ReactNode;
}

const Results: FC<Props & StateResultsProvided> = ({ searchResults, children }) => (
  <div className="c-search__results">{searchResults.nbHits === 0 ? <NoResult /> : children}</div>
);

export default connectStateResults(Results);
