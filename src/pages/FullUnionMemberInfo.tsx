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

  if (!unionMember) {
    return <>Загрузка...</>;
  }

  const unionMemberData: string[][] = [unionMember.biography, unionMember.works];

  const handleGenerateTabNames = () => {
    const tabNames = ['Биография', 'Список сочинений'];

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

    return tabNames;
  };

  const hasComposerScoresOnSite = allScores.some((score) => score.title.includes(unionMember.surname));
  const showCTA = hasComposerScoresOnSite && unionMember.profession === 'Композитор';

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
        {showCTA && <CTA linkText='Ноты композитора' borderColor='grey' path='/scores' />}
      </section>
      <Tabs
        tabNamesArray={handleGenerateTabNames()}
        value={сategory}
        onChangeTab={(index: number) => setCategory(index)}
      />
      <TextContent textArray={unionMemberData[сategory]} place='full-union-member' />
    </main>
  );
};

export default FullUnionMemberInfo;
