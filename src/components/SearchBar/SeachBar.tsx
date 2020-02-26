import React from 'react';
import cx from 'classnames';

import Icon from '../Icon';

import './c-search-bar.scss';

interface Props {
  className?: string;
  id: string;
  value?: string;
  onChange?: JSX.IntrinsicElements['input']['onChange'];
  onFocus?: JSX.IntrinsicElements['input']['onFocus'];
}

const SearchBar = ({ className, value, onChange, onFocus, id }: Props) => (
  <div className={cx('c-search-bar', className)} id={id}>
    <form
      className="c-search-bar__form"
      id={`${id}-form`}
      onSubmit={e => e.preventDefault()}
      aria-label="Search Form"
      role="search"
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
      <label className="u-visually-hidden" htmlFor={`${id}-query`}>
        Search query
      </label>
      <input
        id={`${id}-query`}
        type="search"
        className="c-search-bar__input"
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        placeholder="Search..."
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
      />
      <Icon name="search" className="c-search-bar__icon" ariaHidden />
    </form>
  </div>
);

export default SearchBar;
