import React from 'react';
import { unionMembersArray } from '../utils/membersArray';
import { PageTitle, Pagination, UnionMemberBlock, menuItems } from '../components';
import { compareBySurname } from '../utils/utils';
import { useSelector } from 'react-redux';
import { selectCurrentPage } from '../redux/searchSlice/selectors';

const UnionMembers: React.FC = () => {
  const currentPage = useSelector(selectCurrentPage);
  const firstItem = currentPage * 12 - 12;
  const lastItam = currentPage * 12;

  const membersArraySortedBySurnameAndSliced = [...unionMembersArray].sort(compareBySurname).slice(firstItem, lastItam);

  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  return (
    <main className='union-members'>
      <PageTitle name={`${menuItems[2].name} ИООО Союза композиторов`} />
      <ul className='union-members__list'>
        {membersArraySortedBySurnameAndSliced.map((member, index) => (
          <li key={index}>
            <UnionMemberBlock {...member} />
          </li>
        ))}
      </ul>
      <Pagination />
    </main>
  );
};

export default UnionMembers;
