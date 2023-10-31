import React from 'react';
import { PageTitle, Pagination, SearchResult } from '../components';
import { projectsArray } from '../utils/projectsArray';

const SearchResults: React.FC = () => {
  return (
    <main className='search-results'>
      <section>
        <PageTitle name='Результаты поиска' />
        {/* <p className='search-results__no-results-text'>
          К сожалению, ничего не нашлось. Попробуйте изменить ваш запрос.
        </p> */}
        <ul className='search-results__list'>
          {projectsArray.map((project, index) => (
            <li key={index}>
              <SearchResult title={project.title} description={project.description} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Pagination />
      </section>
    </main>
  );
};

export default SearchResults;
