import React from 'react';
import './Pagination.scss';
const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const handleChangePageForward = () => {
    if (currentPage < pageNumbers.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className='pagination'>
      {currentPage > 0 && (
        <button className='pagination__button' onClick={() => setCurrentPage(currentPage - 1)}>
          Назад
        </button>
      )}
      <ul className='pagination__list'>
        {pageNumbers.map((pageNumber, index) => (
          <li
            key={index}
            className={`pagination__list-item ${currentPage === index ? 'pagination__list-item_active' : ''}`}
          >
            <button
              className={`pagination__page-number-button ${
                currentPage === index ? 'pagination__page-number-button_active' : ''
              }`}
              onClick={() => setCurrentPage(index)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
      <button className='pagination__button' onClick={handleChangePageForward}>
        Вперёд
      </button>
    </section>
  );
};
