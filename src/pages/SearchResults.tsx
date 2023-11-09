import React from 'react';
import { PageTitle, Pagination, SearchResult } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSearch } from '../redux/searchSlice/slice';

const SearchResults: React.FC = () => {
  const { searchResults, searchValue } = useSelector((state: any) => state.search);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setOpenSearch());
  }, [dispatch]);

  return (
    <main className='search-results'>
      <section>
        <PageTitle name='Результаты поиска' />
        {searchResults.length === 0 ? (
          <p className='search-results__no-results-text'>
            {`${
              !searchValue ? 'Запрос должен включать хотя бы один символ.' : 'К сожалению, ничего не нашлось. '
            } Попробуйте изменить Ваш запрос.`}
          </p>
        ) : (
          <ul className='search-results__list'>
            {/*@ts-ignore*/}
            {searchResults.map((searchResult, index) => (
              <li key={index}>
                <SearchResult
                  title={searchResult.title || searchResult.surname + ' ' + searchResult.name}
                  description={
                    searchResult.description ||
                    searchResult.articleDescription ||
                    searchResult.shortBiography ||
                    searchResult.newsText
                  }
                  path={`/${
                    searchResult.description
                      ? 'projects'
                      : searchResult.articleDescription
                      ? 'aboutus'
                      : searchResult.shortBiography
                      ? 'unionmembers'
                      : 'news'
                  }/${searchResult.id}`}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
      {searchResults.length > 0 && (
        <section>
          <Pagination />
        </section>
      )}
    </main>
  );
};

export default SearchResults;
