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

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    dispatch(setOpenSearch());
  }, [dispatch]);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
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
  }, []);

  const limit = screenWidth > 933 ? 6 : screenWidth <= 933 && screenWidth > 600 ? 5 : 3;
  const firstItem = currentPage * limit - limit;
  const lastItam = currentPage * limit;

  const totalPages = Math.ceil(searchResults.length / limit);

  const searchResultsItems = searchResults.slice(firstItem, lastItam);

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
            {searchResultsItems.map((searchResult: CombinedArrayObject) => (
              <li key={searchResult._id}>
                <SearchResult
                  title={
                    searchResult.composer
                      ? searchResult.composer + ' ' + searchResult.title
                      : searchResult.title
                      ? searchResult.title
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
                      : 'news'
                  }${
                    (searchResult.iframeUrl || !searchResult.composer) && !searchResult.text
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
