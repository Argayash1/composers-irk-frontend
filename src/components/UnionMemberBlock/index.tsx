import React from 'react';
import './UnionMemberBlock.scss';

type UnionMemberProps = {
  imageUrl: string;
  name: string;
  profession: string;
};

export const UnionMember: React.FC<UnionMemberProps> = ({ imageUrl, name, profession }) => {
  return (
    <div className='union-member'>
      <img className='union-member__image' src={imageUrl} alt={name} />
      <h2 className='union-member__name'>{name}</h2>
      <p className='union-member__profession'>{profession}</p>
    </div>
  );
};
