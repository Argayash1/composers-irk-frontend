import React from 'react';
import './Pagination.scss';

type PaginationProps = {
  onSwitchToNextPage: () => void;
  onSwitchToPreviousPage: () => void;
  onChangePage: (page: number) => void;
  currentPage: number;
  totalPages?: number;
};

export type PageNumber = number | string;

export const Pagination = ({
  onSwitchToNextPage,
  onSwitchToPreviousPage,
  onChangePage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  const pageNumbers = totalPages ? handleGeneratePageNumbers(totalPages) : [1, 2, 3, 4, 5, 6, 7];

  function handleGeneratePageNumbers(totalPages: number): number[] {
    const numbers = [];

    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }

    return numbers;
  }

  const handleAddEllipsis = (pageNumbers: PageNumber[]): PageNumber[] => {
    if (pageNumbers.length >= 7) {
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
    }

    return pageNumbers;
  };

  const isEllipsisOrPrecededByEllipsis = (currentIndex: number): boolean => {
    if (currentIndex === 0) {
      // Если текущий индекс равен 0, то нет предыдущего элемента.
      return true;
    }

    const currentElement = handleAddEllipsis(pageNumbers)[currentIndex];

    // Проверяем, является ли предыдущий элемент многоточием (...)
    const nextElement = handleAddEllipsis(pageNumbers)[currentIndex + 1];
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
        {handleAddEllipsis(pageNumbers).map((page, index) => (
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
      {totalPages && totalPages > 1 && currentPage < totalPages && (
        <button className='pagination__button' onClick={onSwitchToNextPage}>
          Вперёд
        </button>
      )}
    </section>
  );
};
