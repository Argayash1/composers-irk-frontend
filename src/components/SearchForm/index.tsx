import React from 'react';
import { SearchButton, CloseButton, ButtonTypeEnum } from '..';
import './SearchForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleSearch, setSearchValue, setSearchResults } from '../../redux/searchSlice/slice';
import { useNavigate } from 'react-router-dom';
import { newsArray } from '../../utils/newsArray';
import { membersArray } from '../../utils/membersArray';
import { articlesArray } from '../../utils/articlesArray';
import { projectsArray } from '../../utils/projectsArray';
import { compareBySurname } from '../../utils/utils';

interface CombinedArrayObject {
  [key: string]: string | string[];
}

export const SearchForm: React.FC = () => {
  const { searchValue, isSearchOpen } = useSelector((state: any) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const membersArraySortedBySurname = membersArray.sort(compareBySurname);

  const composers = membersArraySortedBySurname.map((member, index) => ({ ...member, id: String(index) }));

  const combinedArray: CombinedArrayObject[] = [...newsArray, ...composers, ...articlesArray, ...projectsArray];

  const handleSearchByAllSite = (e: React.FormEvent<HTMLFormElement>, query: string) => {
    e.preventDefault();

    if (searchValue) {
      const results: CombinedArrayObject[] = combinedArray.filter((obj) => {
        return Object.values(obj).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(query.toLowerCase());
          }

          if (Array.isArray(value)) {
            return value.some((item) => typeof item === 'string' && item.toLowerCase().includes(query.toLowerCase()));
          }

          return false;
        });
      });

      dispatch(setSearchResults(results));
    }

    navigate('/searchresults');
  };

  const handleClearSearchBar = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const handleCloseSearchBar = () => {
    dispatch(setToggleSearch());
    dispatch(setSearchValue(''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <section className={`search ${isSearchOpen ? 'search_is_opened' : ''}`}>
      <form className='search__form' action='' onSubmit={(e) => handleSearchByAllSite(e, searchValue)} noValidate>
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
