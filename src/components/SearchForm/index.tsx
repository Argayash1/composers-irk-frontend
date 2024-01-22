import React from 'react';
import { SearchButton, CloseButton, ButtonTypeEnum } from '..';
import './SearchForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSearchResults, setErrorText, setCloseSearch } from '../../redux/search/slice';
import { useNavigate } from 'react-router-dom';
import { newsArray } from '../../utils/newsArray';
import { unionMembersArray } from '../../utils/membersArray';
import { articlesArray } from '../../utils/articlesArray';
import { projectsArray } from '../../utils/projectsArray';
import { RootState } from '../../redux/store';

export interface CombinedArrayObject {
  [key: string]: string | string[];
}

type SearchFormProps = {
  place?: string;
};

export const SearchForm = ({ place }: SearchFormProps) => {
  const { searchValue, isSearchOpen, errorText } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const combinedArray: CombinedArrayObject[] = [...newsArray, ...unionMembersArray, ...articlesArray, ...projectsArray];

  const handleSearchByAllSite = (e: React.FormEvent<HTMLFormElement>, query: string) => {
    e.preventDefault();

    if (searchValue) {
      dispatch(setErrorText(''));
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
      navigate('/searchresults');
    } else {
      dispatch(setErrorText('Запрос должен включать хотя бы один символ.'));
    }
  };

  const handleClearSearchBar = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <section
      className={`search ${place === 'header' ? 'search_place_header' : ''} ${
        place === 'search-results' ? 'search_place_search-results' : ''
      }`}
    >
      <div
        className={`search__container ${isSearchOpen || place === 'search' ? 'search__container_is_opened' : ''} ${
          place === 'search-results' ? 'search__container_place_search-results' : ''
        } ${place === 'search' ? 'search__container_place_search' : ''}`}
      >
        <form className='search__form' action='' onSubmit={(e) => handleSearchByAllSite(e, searchValue)} noValidate>
          <label htmlFor='search' className='search__label'>
            <input
              className={`search__input ${errorText ? 'search__input_type_error' : ''}`}
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
            <span className='search__error'>{errorText}</span>
          </label>
          <div className='search__buttons'>
            <SearchButton type={ButtonTypeEnum.SUBMIT} />
            {searchValue && <CloseButton onClick={handleClearSearchBar} />}
          </div>
        </form>
        {place !== 'search' && <CloseButton onClick={() => dispatch(setCloseSearch())} place='search' />}
      </div>
    </section>
  );
};
