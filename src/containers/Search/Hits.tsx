import React, { FC, useLayoutEffect } from 'react';
import { navigate } from 'gatsby';
import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';

import Hit, { ChecklistHit } from './Hit';

interface Props {
  onClick: () => void;
}

const Hits: FC<Props & HitsProvided<ChecklistHit>> = ({ hits, onClick }) => {
  const enterListener = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && hits.length > 0) {
      navigate(`/checklist/${hits[0].slug}`);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('keyup', enterListener);

    return () => {
      window.removeEventListener('keyup', enterListener);
    };
  });

  return (
    <div className="c-search__hits">
      {hits.map(hit => (
        <Hit key={hit.objectID} hit={hit} onClick={onClick} />
      ))}
    </div>
  );
};

export default connectHits(Hits);
