import React from 'react';
import { UnionMember, membersArray } from '../utils/membersArray';
import { PageTitle, UnionMemberBlock } from '../components';

const UnionMembers: React.FC = () => {
  function compareBySurname(a: UnionMember, b: UnionMember) {
    const surnameA = a.surname.toUpperCase();
    const surnameB = b.surname.toUpperCase();

    if (surnameA < surnameB) {
      return -1;
    }
    if (surnameA > surnameB) {
      return 1;
    }
    return 0;
  }
  const membersArraySortedBySurname = membersArray.sort(compareBySurname);

  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  return (
    <main className='union-members'>
      <PageTitle name='Состав ИООО Союза композиторов' />
      <ul className='union-members__list'>
        {membersArraySortedBySurname.map((member, index) => (
          <li key={index}>
            <UnionMemberBlock index={index} {...member} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UnionMembers;
