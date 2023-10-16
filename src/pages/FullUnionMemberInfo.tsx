import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, PageTitle, Tabs } from '../components';
import { membersArray } from '../utils/membersArray';

const tabNames = ['Биография', 'Конкурсы и фекстивали', 'Список сочинений', 'Награды', 'Ссылки'];

const FullUnionMemberInfo: React.FC = () => {
  const [unionMember, setUnionMember] = React.useState<{
    imageUrl: string;
    name: string;
    profession: string;
    biography: string;
  }>();
  const [сategory, setCategory] = React.useState(0);

  const { id } = useParams();

  React.useEffect(() => {
    const memberObject = membersArray[Number(id)];
    setUnionMember(memberObject);
  }, [id]);

  const handleChangeCategory = (index: number) => {
    setCategory(index);
  };

  if (!unionMember) {
    return <>Загрузка...</>;
  }

  return (
    <div className='full-union-member'>
      <PageTitle name={unionMember.name} />
      <div className='full-union-member__container'>
        <img className='full-union-member__image' src={unionMember.imageUrl} alt='' />
        <p className='full-union-member__text'>{unionMember.biography}</p>
        {unionMember.profession === 'Композитор' && (
          <CTA linkText='Ноты композитора' borderColor='grey' path='/scores' />
        )}
      </div>

      <Tabs tabNamesArray={tabNames} value={сategory} onChangeTab={handleChangeCategory} />
    </div>
  );
};

export default FullUnionMemberInfo;
