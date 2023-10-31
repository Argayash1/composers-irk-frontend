import React from 'react';
import { membersArray } from '../utils/membersArray';
import { PageTitle, Pagination, UnionMemberBlock, menuItems } from '../components';
import { compareBySurname } from '../utils/utils';

const UnionMembers: React.FC = () => {
  const membersArraySortedBySurname = membersArray.sort(compareBySurname);

  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  return (
    <main className='union-members'>
      <PageTitle name={`${menuItems[2].name} ИООО Союза композиторов`} />
      <ul className='union-members__list'>
        {membersArraySortedBySurname.map((member, index) => (
          <li key={index}>
            <UnionMemberBlock index={index} {...member} />
          </li>
        ))}
      </ul>
      <Pagination />
    </main>
  );
};

export default UnionMembers;
