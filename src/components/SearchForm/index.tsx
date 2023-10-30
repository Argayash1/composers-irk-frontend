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

  const handleSearсhByAllSite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/searchresults');
  };

  const handleClearSearchBar = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
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
      <form className='search__form' action='' onSubmit={handleSearсhByAllSite}>
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
