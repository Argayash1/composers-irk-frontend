import React from 'react';
import { SearchButton, CloseButton } from '../../components';
import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSearchOpen, setSearchValue } from '../../redux/searchSlice/slice';
import { selectSearchValue } from '../../redux/searchSlice/selectors';

export const Search = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClearSearchBar = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <section className='search'>
      <form action=''>
        <input
          className='search__input'
          type='text'
          value={searchValue || ''}
          onChange={handleChange}
          placeholder='Введите запрос'
          ref={inputRef}
        />
        <div className='search__buttons'>
          <SearchButton type='submit' />
          <CloseButton onClick={handleClearSearchBar} />
        </div>
      </form>
      <CloseButton onClick={() => dispatch(setIsSearchOpen())} />
    </section>
  );
};
