import React, { createRef, FC, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';
import cx from 'classnames';

import useClickOutside from '../../hooks/useClickOutside';

import SearchInput from './SearchInput';
import Hits from './Hits';
import Results from './Results';

import './c-search.scss';

import algolia from '../../images/algolia.svg';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID as string,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY as string,
);

const indexName = process.env.GATSBY_ALGOLIA_INDEX as string;

interface Props {
  id: string;
  className?: string;
}

const Search: FC<Props> = ({ id, className }) => {
  const ref = createRef<HTMLDivElement>();

  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);

  useClickOutside(ref, () => {
    setFocus(false);
  });

  const handleSearchStateChange = ({ query: nextQuery }: { query: string }) => {
    setQuery(nextQuery);
  };

  const handleInputFocus = () => {
    setFocus(true);
  };

  const handleHitClick = () => {
    setFocus(false);
  };

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexName}
      onSearchStateChange={handleSearchStateChange}
    >
      <div className={cx('c-search', className)} ref={ref}>
        <Configure hitsPerPage={3} />
        <SearchInput onFocus={handleInputFocus} id={id} />
        {query && query.trim().length > 0 && focus && (
          <Results>
            <Hits onClick={handleHitClick} />
            <div className="c-search__powered-by">
              <a href="https://www.algolia.com" target="_blank" rel="noopener noreferrer">
                <img src={algolia} alt="Search by Algolia" width={112} height={16} />
              </a>
            </div>
          </Results>
        )}
      </div>
    </InstantSearch>
  );
};

export default Search;
