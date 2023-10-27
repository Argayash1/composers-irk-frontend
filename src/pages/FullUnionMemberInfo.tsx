import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, PageTitle, Tabs } from '../components';
import { membersArray } from '../utils/membersArray';
import { allScores } from './Scores';
import { compareBySurname } from '../utils/utils';
import { TextContent } from '../components/TextContent';

const FullUnionMemberInfo: React.FC = () => {
  const [unionMember, setUnionMember] = React.useState<{
    imageUrl: string;
    surname: string;
    name: string;
    profession: string;
    biography: string[];
    shortBiography: string;
    works: string[];
    competitions?: string[];
    awards?: string[];
    links?: string[];
  }>();
  const [сategory, setCategory] = React.useState<number>(0);

  const { id } = useParams();

  React.useEffect(() => {
    const membersArraySortedBySurname = membersArray.sort(compareBySurname);
    const memberObject = membersArraySortedBySurname[Number(id)];
    setUnionMember(memberObject);
  }, [id]);

  const handleChangeCategory = (index: number) => {
    setCategory(index);
  };

  if (!unionMember) {
    return <>Загрузка...</>;
  }

  const tabNames = ['Биография', 'Список сочинений'];

  const unionMemberData: string[][] = [unionMember.biography, unionMember.works];

  if (unionMember) {
    if (unionMember.competitions) {
      tabNames.push('Конкурсы и фестивали');
      unionMemberData.push(unionMember.competitions);
    }
    if (unionMember.awards) {
      tabNames.push('Награды');
      unionMemberData.push(unionMember.awards);
    }
    if (unionMember.links) {
      unionMemberData.push(unionMember.links);
      tabNames.push('Ссылки');
    }
  }

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
      <TextContent textArray={unionMemberData[сategory]} />
      {/* <ul className='full-union-member__category-info-items'>
        {unionMemberData[сategory].map((string, index) => (
          <li key={index}>
            <p className='full-union-member__text'>{string}</p>
          </li>
        ))}
      </ul> */}
    </main>
  );
};

export default FullUnionMemberInfo;
