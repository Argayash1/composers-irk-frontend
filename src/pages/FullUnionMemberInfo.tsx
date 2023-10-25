import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, PageTitle, Tabs } from '../components';
import { membersArray } from '../utils/membersArray';
import { allScores } from './Scores';

const FullUnionMemberInfo: React.FC = () => {
  const [unionMember, setUnionMember] = React.useState<{
    imageUrl: string;
    surname: string;
    name: string;
    profession: string;
    biography: string;
    shortBiography: string;
    works: string;
    competitions?: string;
    awards?: string;
    links?: string;
  }>();
  const [сategory, setCategory] = React.useState<number>(0);

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

  const tabNames = ['Биография'];
  if (unionMember) {
    if (unionMember.works) {
      tabNames.push('Список сочинений');
    }
    if (unionMember.competitions) {
      tabNames.push('Конкурсы и фестивали');
    }
    if (unionMember.awards) {
      tabNames.push('Награды');
    }
    if (unionMember.links) {
      tabNames.push('Ссылки');
    }
  }

  console.log(tabNames);

  console.log(unionMember);

  const unionMemberData = [
    unionMember.biography,
    unionMember.works,
    unionMember.competitions,
    unionMember.awards,
    unionMember.links,
  ];

  const hasComposerScoreOnSite = allScores.some((score) => score.title.includes(unionMember.surname));

  return (
    <main className='full-union-member'>
      <PageTitle name={`${unionMember.surname} ${unionMember.name}`} />
      <div className='full-union-member__container'>
        <img className='full-union-member__image' src={unionMember.imageUrl} alt='' />
        <p className='full-union-member__short-biography'>{unionMember.shortBiography}</p>
        {unionMember.profession === 'Композитор' && hasComposerScoreOnSite && (
          <CTA linkText='Ноты композитора' borderColor='grey' path='/scores' />
        )}
      </div>
      <Tabs tabNamesArray={tabNames} value={сategory} onChangeTab={handleChangeCategory} />
      <p className='full-union-member__text'>{unionMemberData[сategory]}</p>
    </main>
  );
};

export default FullUnionMemberInfo;
