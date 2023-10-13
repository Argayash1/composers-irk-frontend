import React from 'react';
import { membersArray } from '../utils/membersArray';
import { UnionMember } from '../components';

const UnionMembers: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  return (
    <div className='union-members'>
      <h1 className='union-members__title'>Состав ИООО Союза композиторов</h1>
      <ul className='union-members__list'>
        {membersArray.map((member, index) => (
          <li key={index}>
            <UnionMember {...member} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnionMembers;
