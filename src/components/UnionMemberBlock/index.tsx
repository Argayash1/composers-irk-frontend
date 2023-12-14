import React from 'react';
import './UnionMemberBlock.scss';
import { Link } from 'react-router-dom';

type UnionMemberProps = {
  id: string;
  imageUrl: string;
  surname: string;
  name: string;
  profession: string;
};

export const UnionMemberBlock = ({ id, imageUrl, surname, name, profession }: UnionMemberProps) => {
  return (
    <div className='union-member'>
      <Link to={`/unionmembers/${id}`} className='union-member__link'>
        <img className='union-member__image' src={imageUrl} alt={name} />
      </Link>
      <h2 className='union-member__name'>
        {surname} {name}
      </h2>
      <p className='union-member__profession'>{profession}</p>
    </div>
  );
};
