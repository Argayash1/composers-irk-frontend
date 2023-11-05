import React from 'react';
import { SearchButton, CloseButton, ButtonTypeEnum } from '..';
import './SearchForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSearchOpen, setSearchValue } from '../../redux/searchSlice/slice';
import { useNavigate } from 'react-router-dom';
import { newsArray } from '../../utils/newsArray';
import { membersArray } from '../../utils/membersArray';
import { articlesArray } from '../../utils/articlesArray';
import { projectsArray } from '../../utils/projectsArray';

export const SearchForm: React.FC = () => {
  const { searchValue, isSearchOpen } = useSelector((state: any) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = React.useRef<HTMLInputElement>(null);

  type MyObject = {
    [key: string]: Array<{ [key: string]: string | number }>;
  };

  const handleSearchByAllSite = (e: React.FormEvent<HTMLFormElement>, obj: MyObject, searchString: string) => {
    e.preventDefault();

    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        let array = obj[key];
        for (let i = 0; i < array.length; i++) {
          for (let prop in array[i]) {
            const value = array[i][prop];
            if (
              (typeof value === 'string' && value.includes(searchString)) ||
              (typeof value === 'number' && value.toString().includes(searchString))
            ) {
              navigate('/searchresults');
              return array[i];
            }
          }
        }
      }
    }

    return null;
  };

  const handleClearSearchBar = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const handleCloseSearchBar = () => {
    dispatch(setIsSearchOpen());
    dispatch(setSearchValue(''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const allArrays = {
    newsArray,
    membersArray,
    projectsArray,
    articlesArray,
  };

  return (
    <section className={`search ${isSearchOpen ? 'search_is_opened' : ''}`}>
      {/* @ts-ignore */}
      <form className='search__form' action='' onSubmit={(e) => handleSearchByAllSite(e, allArrays, searchValue)}>
        <input
          className='search__input'
          type='search'
          value={searchValue || ''}
          name='search'
          id='search'
          onChange={handleChange}
          placeholder='Введите запрос'
          autoComplete='off'
          ref={inputRef}
          required
        />
        <div className='search__buttons'>
          <SearchButton type={ButtonTypeEnum.SUBMIT} />
          {searchValue && <CloseButton onClick={handleClearSearchBar} />}
        </div>
      </form>
      <CloseButton onClick={handleCloseSearchBar} />
    </section>
  );
};
