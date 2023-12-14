import React from 'react';
import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage } from '../../redux/searchSlice/selectors';
import { setCurrentPage } from '../../redux/searchSlice/slice';
const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

export const Pagination = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  return (
    <section className='pagination'>
      {currentPage > 1 && (
        <button className='pagination__button' onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
          Назад
        </button>
      )}
      <ul className='pagination__list'>
        {pageNumbers.map((page, index) => (
          <li
            key={index}
            className={`pagination__list-item ${currentPage === page ? 'pagination__list-item_active' : ''}`}
          >
            <button
              className={`pagination__page-number-button ${
                currentPage === page ? 'pagination__page-number-button_active' : ''
              }`}
              onClick={() => dispatch(setCurrentPage(page))}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      {currentPage < 7 && (
        <button className='pagination__button' onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
          Вперёд
        </button>
      )}
    </section>
  );
};
