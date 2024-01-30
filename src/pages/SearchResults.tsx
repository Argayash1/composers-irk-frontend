import React from 'react';
import { TitleContainer, Pagination, SearchForm, SearchResult } from '../components';
import { useSelector } from 'react-redux';
import { setCurrentPage, setOpenSearch } from '../redux/search/slice';
import { RootState, useAppDispatch } from '../redux/store';
import clsx from 'clsx';
import { CombinedArrayObject } from '../redux/search/types';

const SearchResults: React.FC = () => {
  const { searchResults, currentPage } = useSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setOpenSearch());
  }, [dispatch]);

  return (
    <main className='search-results'>
      <TitleContainer name='Поиск' place='search-results' />
      <SearchForm place='search-results' />
      <section>
        <h2
          className={clsx(
            'search-results__title',
            searchResults.length === 0 && 'search-results__title_type_no-results',
          )}
        >
          Результаты поиска
        </h2>
        {searchResults.length === 0 ? (
          <p className='search-results__no-results-text'>
            К сожалению, ничего не нашлось. Попробуйте изменить Ваш запрос.
          </p>
        ) : (
          <ul className='search-results__list'>
            {searchResults.map((searchResult: CombinedArrayObject) => (
              <li key={searchResult._id}>
                <SearchResult
                  title={
                    searchResult.composer
                      ? searchResult.composer + ' ' + searchResult.title
                      : searchResult.description || searchResult.articleDescription
                      ? searchResult.title
                      : searchResult.surname + ' ' + searchResult.name + ' ' + searchResult.patronymic
                  }
                  description={
                    searchResult.description ||
                    searchResult.articleDescription ||
                    searchResult.shortBiography ||
                    searchResult.newsText
                  }
                  path={`/${
                    searchResult.composer
                      ? 'scores'
                      : searchResult.description
                      ? 'projects'
                      : searchResult.articleDescription
                      ? 'aboutus'
                      : searchResult.shortBiography
                      ? 'unionmembers'
                      : 'news'
                  }${!searchResult.composer && '/' + searchResult._id}`}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
      {searchResults.length > 0 && (
        <Pagination
          onChangePage={(page) => dispatch(setCurrentPage(page))}
          onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
          onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
          currentPage={currentPage}
        />
      )}
    </main>
  );
};

export default SearchResults;
