import React from 'react';
import { SearchButton, CloseButton, ButtonTypeEnum } from '../../components';
import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSearchOpen, setSearchValue } from '../../redux/searchSlice/slice';

export const Search: React.FC = () => {
  const { searchValue, isSearchOpen } = useSelector((state: any) => state.search);
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
    <section className={`search ${isSearchOpen ? 'search_is_opened' : ''}`}>
      <form className='search__form' action=''>
        <input
          className='search__input'
          type='text'
          value={searchValue || ''}
          onChange={handleChange}
          placeholder='Введите запрос'
          ref={inputRef}
        />
        <div className='search__buttons'>
          <SearchButton type={ButtonTypeEnum.SUBMIT} />
          {searchValue && <CloseButton onClick={handleClearSearchBar} />}
        </div>
      </form>
      <CloseButton onClick={() => dispatch(setIsSearchOpen())} />
    </section>
  );
};
