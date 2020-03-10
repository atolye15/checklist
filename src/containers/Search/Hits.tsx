import React, { FC, useLayoutEffect } from 'react';
import { navigate } from 'gatsby';
import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';

import './c-search.scss';
import SearchCard, { Props as SearchCardProps } from '../../components/SearchCard';

interface ChecklistHit extends SearchCardProps {
  excerpt: string;
  objectID: string;
}

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
        <SearchCard
          key={hit.objectID}
          category={hit.category}
          categorySlug={hit.categorySlug}
          todoCount={hit.todoCount}
          title={hit.title}
          description={hit.description}
          tags={hit.tags}
          slug={hit.slug}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default connectHits(Hits);
