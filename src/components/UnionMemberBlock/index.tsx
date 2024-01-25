import React from 'react';
import './UnionMemberBlock.scss';
import { Link } from 'react-router-dom';

type UnionMemberProps = {
  _id: string;
  imageUrl: string;
  surname: string;
  patronymic: string;
  name: string;
  profession: string;
};

export const UnionMemberBlock = ({ _id, imageUrl, surname, patronymic, name, profession }: UnionMemberProps) => {
  return (
    <div className='union-member'>
      <Link to={`/unionmembers/${_id}`} className='union-member__link'>
        <img className='union-member__image' src={imageUrl} alt={name} />
      </Link>
      <h2 className='union-member__name'>
        {surname} {name} {patronymic}
      </h2>
      <p className='union-member__profession'>{profession}</p>
    </div>
  );
};
