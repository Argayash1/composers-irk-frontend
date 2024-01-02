import React from 'react';
import './Pagination.scss';

type PaginationProps = {
  onSwitchToNextPage: () => void;
  onSwitchToPreviousPage: () => void;
  onChangePage: (page: number) => void;
  currentPage: number;
};

export type PageNumber = number | string;

export const Pagination = ({
  onSwitchToNextPage,
  onSwitchToPreviousPage,
  onChangePage,
  currentPage,
}: PaginationProps) => {
  const handleGeneratePageNumbers = () => {
    const pageNumbers: PageNumber[] = [1, 2, 3, 4, 5, 6, 7];
    const ellipsis = '...';

    if (currentPage === 1 || currentPage === 2) {
      pageNumbers.splice(4, 2, ellipsis);
    }
    if (currentPage === 3) {
      pageNumbers.splice(5, 1, ellipsis);
    }
    if (currentPage === 5) {
      pageNumbers.splice(1, 1, ellipsis);
    }
    if (currentPage === 6) {
      pageNumbers.splice(1, 2, ellipsis);
    }
    if (currentPage === 7) {
      pageNumbers.splice(1, 3, ellipsis);
    }

    return pageNumbers;
  };

  const isEllipsisOrPrecededByEllipsis = (currentIndex: number) => {
    if (currentIndex === 0) {
      // Если текущий индекс равен 0, то нет предыдущего элемента.
      return true;
    }

    const currentElement = handleGeneratePageNumbers()[currentIndex];

    // Проверяем, является ли предыдущий элемент многоточием (...)
    const nextElement = handleGeneratePageNumbers()[currentIndex + 1];
    if (nextElement === '...' || currentElement === '...') {
      return false;
    }

    return true;
  };

  const handleChangePage = (page: PageNumber) => {
    if (typeof page === 'number') {
      onChangePage(page);
    }
  };

  return (
    <section className='pagination'>
      {currentPage > 1 && (
        <button className='pagination__button' onClick={onSwitchToPreviousPage}>
          Назад
        </button>
      )}
      <ul className='pagination__list'>
        {handleGeneratePageNumbers().map((page, index) => (
          <li
            key={index}
            className={`pagination__list-item ${currentPage === page ? 'pagination__list-item_active' : ''} ${
              !isEllipsisOrPrecededByEllipsis(index) ? 'pagination__list-item_type_ellipsis' : ''
            }`}
          >
            <button
              className={`pagination__page-number-button ${
                currentPage === page ? 'pagination__page-number-button_active' : ''
              } `}
              onClick={() => handleChangePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      {currentPage < 7 && (
        <button className='pagination__button' onClick={onSwitchToNextPage}>
          Вперёд
        </button>
      )}
    </section>
  );
};
