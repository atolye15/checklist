import React, { FC } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';

import SearchBar from '../../components/SearchBar/SeachBar';

interface Props extends SearchBoxProvided {
  id: string;
  className?: string;
  onFocus: () => void;
}

const SearchInput: FC<Props> = ({ id, className, onFocus, refine }) => {
  const handleChange: JSX.IntrinsicElements['input']['onChange'] = event => {
    refine(event.currentTarget.value);
  };

  return <SearchBar id={id} className={className} onFocus={onFocus} onChange={handleChange} />;
};

export default connectSearchBox(SearchInput);
