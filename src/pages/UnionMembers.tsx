import React from 'react';
import { unionMembersArray } from '../utils/membersArray';
import { TitleContainer, Pagination, UnionMemberBlock, menuItems } from '../components';
import { compareBySurname } from '../utils/utils';
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/unionMember/slice';
import { selectUnionMemberCurrentPage } from '../redux/unionMember/selectors';
import { useAppDispatch } from '../redux/store';

const UnionMembers: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentPage = useSelector(selectUnionMemberCurrentPage);

  const handleSetCardsPerPge = (): number => {
    const screenWidth = window.screen.width;

    if (screenWidth >= 1170) {
      return 12;
    }
    if (screenWidth < 1170 && screenWidth >= 767) {
      return 9;
    }

    if (screenWidth < 767) {
      return 8;
    }

    return 0; // или любое другое значение по умолчанию
  };

  const cardsPerPage = handleSetCardsPerPge();

  const firstItem = currentPage * cardsPerPage - cardsPerPage;
  const lastItam = currentPage * cardsPerPage;

  const membersArraySortedBySurnameAndSliced = [...unionMembersArray].sort(compareBySurname).slice(firstItem, lastItam);

  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  return (
    <main className='union-members'>
      <TitleContainer name={`${menuItems[2].name} ИООО Союза композиторов`} place='union-members' path='/' />
      <ul className='union-members__list'>
        {membersArraySortedBySurnameAndSliced.map((member, index) => (
          <li key={index}>
            <UnionMemberBlock {...member} />
          </li>
        ))}
      </ul>
      <Pagination
        onChangePage={(page) => dispatch(setCurrentPage(page))}
        onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
        onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
        currentPage={currentPage}
      />
    </main>
  );
};

export default UnionMembers;
