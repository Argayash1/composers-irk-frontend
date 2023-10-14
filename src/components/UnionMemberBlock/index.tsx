import React from 'react';
import './UnionMemberBlock.scss';
import { Link } from 'react-router-dom';

type UnionMemberProps = {
  imageUrl: string;
  name: string;
  profession: string;
  index: number;
};

export const UnionMember: React.FC<UnionMemberProps> = ({ imageUrl, name, profession, index }) => {
  return (
    <div className='union-member'>
      <Link to={`/unionmembers/${index}`}>
        <img className='union-member__image' src={imageUrl} alt={name} />
      </Link>
      <h2 className='union-member__name'>{name}</h2>
      <p className='union-member__profession'>{profession}</p>
    </div>
  );
};
