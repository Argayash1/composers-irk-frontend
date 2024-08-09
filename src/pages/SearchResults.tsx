import React from 'react';
import { TitleContainer, Pagination, SearchForm, SearchResult } from '../components';
import { useSelector } from 'react-redux';
import { setCurrentPage, setScreenWidth } from '../redux/search/slice';
import clsx from 'clsx';
import { CombinedArrayObject } from '../redux/search/types';
import { selectSearchData } from '../redux/search/selectors';
import { useAppDispatch } from '../redux/store';
import { fetchSearchResults } from '../redux/search/asyncActions';

const SearchResults: React.FC = () => {
  const { searchResults, currentPage, totalPages, searchValue, screenWidth } = useSelector(selectSearchData);
  const dispatch = useAppDispatch();

  const isMounted = React.useRef<boolean>(false);
  const [query, setQuery] = React.useState<string>('');

  const limit = screenWidth > 933 ? 6 : screenWidth <= 933 && screenWidth > 600 ? 5 : 3;

  React.useEffect(() => {
    document.title = 'Результаты поиска';
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenWidth(window.innerWidth));
    };

    let timeoutId: NodeJS.Timeout;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, 500);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  React.useEffect(() => {
    if (isMounted.current) {
      dispatch(fetchSearchResults({ query: `q=${searchValue}`, currentPage, limit: `limit=${limit}`, screenWidth }));
    }

    isMounted.current = true;
  }, [dispatch, currentPage, limit, screenWidth, searchValue]);

  return (
    <main className='search-results'>
      <TitleContainer name='Поиск' place='search-results' />
      <SearchForm
        place='search-results'
        query={query}
        onClearQuery={() => setQuery('')}
        onChange={(e) => setQuery(e.target.value)}
      />
      <section>
        <h2
          className={clsx(
            'search-results__title',
            searchResults.length === 0 && 'search-results__title_type_no-results'
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
                    searchResult.iframeUrl
                      ? searchResult.title
                      : searchResult.composer
                      ? searchResult.composer + ' ' + searchResult.title
                      : searchResult.title
                      ? searchResult.title
                      : searchResult.year
                      ? `Отчёт-${searchResult.year}`
                      : searchResult.text
                      ? 'Наша история'
                      : searchResult.surname + ' ' + searchResult.name + ' ' + searchResult.patronymic
                  }
                  description={
                    searchResult.description ||
                    searchResult.articleDescription ||
                    searchResult.shortBiography ||
                    searchResult.newsText
                  }
                  path={`/${
                    searchResult.category
                      ? 'scores'
                      : searchResult.description
                      ? 'projects'
                      : searchResult.articleDescription || searchResult.text
                      ? 'aboutus'
                      : searchResult.shortBiography
                      ? 'unionmembers'
                      : searchResult.iframeUrl || searchResult.audioUrl
                      ? 'media'
                      : searchResult.year
                      ? 'reports'
                      : 'news'
                  }${
                    (searchResult.iframeUrl || !searchResult.composer) && !searchResult.text && !searchResult.year
                      ? '/' + searchResult._id
                      : ''
                  }`}
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
          totalPages={totalPages}
        />
      )}
    </main>
  );
};

export default SearchResults;
