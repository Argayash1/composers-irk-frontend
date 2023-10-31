import React from 'react';
import './Pagination.scss';
const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

export const Pagination = () => {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (index: number) => {
    setPage(index);
  };

  return (
    <section className='pagination'>
      <ul className='pagination__list'>
        {pageNumbers.map((pageNumber, index) => (
          <li key={index}>
            <span
              className={`pagination__page-number ${page === index ? 'pagination__page-number_active' : ''}`}
              onClick={() => handleChangePage(index)}
            >
              {pageNumber}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
