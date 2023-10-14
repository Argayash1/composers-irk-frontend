import React from 'react';
import { membersArray } from '../utils/membersArray';
import { PageTitle, UnionMember } from '../components';

const UnionMembers: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  return (
    <div className='union-members'>
      <PageTitle name='Состав ИООО Союза композиторов' />
      <ul className='union-members__list'>
        {membersArray.map((member, index) => (
          <li key={index}>
            <UnionMember index={index} {...member} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnionMembers;
