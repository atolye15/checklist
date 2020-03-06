import React, { FC } from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';

import Hit, { ChecklistHit } from './Hit';

interface Props {
  onClick: () => void;
}

const Hits: FC<Props & HitsProvided<ChecklistHit>> = ({ hits, onClick }) => (
  <div className="c-search__hits">
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} onClick={onClick} />
    ))}
  </div>
);

export default connectHits(Hits);
