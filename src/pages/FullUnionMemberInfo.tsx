import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, TitleContainer, Tabs } from '../components';
import { unionMembersArray } from '../utils/membersArray';
import { allScores } from './Scores';
import { TextContent } from '../components/TextContent';

const FullUnionMemberInfo = () => {
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
    const memberObject = unionMembersArray[Number(id)];
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
      tabNames.push('Ссылки');
      unionMemberData.push(unionMember.links);
    }
  }

  const hasComposerScoreOnSite = allScores.some((score) => score.title.includes(unionMember.surname));

  return (
    <main className='full-union-member'>
      <TitleContainer
        name={`${unionMember.surname} ${unionMember.name}`}
        place='full-union-member'
        path='/unionmembers'
      />
      <section className='full-union-member__container'>
        <img className='full-union-member__image' src={unionMember.imageUrl} alt='' />
        <p className='full-union-member__short-biography'>{unionMember.shortBiography}</p>
        {unionMember.profession === 'Композитор' && hasComposerScoreOnSite && (
          <CTA linkText='Ноты композитора' borderColor='grey' path='/scores' />
        )}
      </section>
      <Tabs tabNamesArray={tabNames} value={сategory} onChangeTab={handleChangeCategory} />
      <TextContent textArray={unionMemberData[сategory]} place='full-union-member' />
    </main>
  );
};

export default FullUnionMemberInfo;
