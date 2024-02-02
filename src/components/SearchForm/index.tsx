import React from 'react';
import { SearchButton, CloseButton, ButtonTypeEnum } from '..';
import './SearchForm.scss';
import { useSelector } from 'react-redux';
import { setSearchValue, setErrorText, setCloseSearch, setCurrentPage } from '../../redux/search/slice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { NO_KEY_WORD_ERROR } from '../../utils/constants';
import { fetchSearchResults } from '../../redux/search/asyncActions';
import { selectSearchData } from '../../redux/search/selectors';

type SearchFormProps = {
  place?: string;
};

export const SearchForm = ({ place }: SearchFormProps) => {
  const { searchValue, isSearchOpen, errorText, screenWidth } = useSelector(selectSearchData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [query, setQuery] = React.useState<string>('');
  const [isLoading, setIsloading] = React.useState<boolean>(false);

  const limit = screenWidth > 933 ? 6 : screenWidth <= 933 && screenWidth > 600 ? 5 : 3;

  const handleSearchByAllSite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);

    if (query) {
      dispatch(setSearchValue(query));
      dispatch(setCurrentPage(1));
      dispatch(setErrorText(''));
      dispatch(fetchSearchResults({ query: `q=${query}`, currentPage: 1, limit: `limit=${limit}`, screenWidth }));
      navigate('/searchresults');
    } else {
      dispatch(setErrorText(NO_KEY_WORD_ERROR));
    }

    setIsloading(false);
  };

  const handleClearSearchBar = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
        <form className='search__form' action='' onSubmit={handleSearchByAllSite} noValidate>
          <label htmlFor='search' className='search__label'>
            <input
              className={`search__input ${errorText ? 'search__input_type_error' : ''}`}
              type='search'
              value={query || ''}
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
            <SearchButton type={ButtonTypeEnum.SUBMIT} place='search' isLoading={isLoading} />
            {searchValue && <CloseButton onClick={handleClearSearchBar} />}
          </div>
        </form>
        {place !== 'search' && <CloseButton onClick={() => dispatch(setCloseSearch())} place='search' />}
      </div>
    </section>
  );
};
