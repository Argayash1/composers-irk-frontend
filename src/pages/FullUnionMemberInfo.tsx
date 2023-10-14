import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, PageTitle } from '../components';
import { membersArray } from '../utils/membersArray';

const FullUnionMemberInfo: React.FC = () => {
  const [unionMember, setUnionMember] = React.useState<{
    imageUrl: string;
    name: string;
    profession: string;
    biography: string;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    const memberObject = membersArray[Number(id)];
    setUnionMember(memberObject);
  }, [id]);

  if (!unionMember) {
    return <>Загрузка...</>;
  }

  return (
    <div className='full-union-member'>
      <PageTitle name={unionMember.name} />
      <img className='full-union-member__image' src={unionMember.imageUrl} alt='' />
      <p className='full-union-member__text'>{unionMember.biography}</p>
      {unionMember.profession === 'Композитор' && <CTA linkText='Ноты композитора' borderColor='grey' path='/scores' />}
    </div>
  );
};

export default FullUnionMemberInfo;
