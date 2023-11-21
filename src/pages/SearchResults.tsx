import React from 'react';
import { CombinedArrayObject, PageTitle, Pagination, SearchResult } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSearch } from '../redux/searchSlice/slice';
import { RootState } from '../redux/store';

const SearchResults: React.FC = () => {
  const { searchResults } = useSelector((state: RootState) => state.search);
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
            {`${'К сожалению, ничего не нашлось. '} Попробуйте изменить Ваш запрос.`}
          </p>
        ) : (
          <ul className='search-results__list'>
            {searchResults.map((searchResult: CombinedArrayObject, index: number) => (
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