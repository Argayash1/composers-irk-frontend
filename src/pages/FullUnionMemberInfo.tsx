import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CTA, TitleContainer, Tabs, TextContent, FullUnionMemberSkeleton } from '../components';
import { useAppDispatch } from '../redux/store';
import { fetchUnionMemberById } from '../redux/unionMember/asyncActions';
import { selectUnionMembersData } from '../redux/unionMember/selectors';
import { useSelector } from 'react-redux';
import { fetchScores } from '../redux/score/asyncActions';
import { selectScoresData } from '../redux/score/selectors';

const FullUnionMemberInfo = () => {
  const dispatch = useAppDispatch();
  const { item, status } = useSelector(selectUnionMembersData);
  const { items: scores, status: scoresStatus } = useSelector(selectScoresData);

  const [сategory, setCategory] = React.useState<number>(0);

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchUnionMemberById(id));
      dispatch(fetchScores(''));
    }
  }, [id, dispatch]);

  if (status === 'loading' && scoresStatus === 'loading') {
    return <FullUnionMemberSkeleton />;
  }

  console.log(scores);

  const unionMemberData: string[] = [item.biography, item.works];

  const handleGenerateTabNames = () => {
    const tabNames = ['Биография', 'Список сочинений'];

    if (item) {
      if (item.competitions) {
        tabNames.push('Конкурсы и фестивали');
        unionMemberData.push(item.competitions);
      }
      if (item.awards) {
        tabNames.push('Награды');
        unionMemberData.push(item.awards);
      }
      if (item.links) {
        tabNames.push('Ссылки');
        unionMemberData.push(item.links);
      }
    }

    return tabNames;
  };

  const hasComposerScoresOnSite = scores.some((score) => score.title.includes(item.surname));
  const showCTA = hasComposerScoresOnSite && item.profession === 'Композитор';

  return (
    <main className='full-union-member'>
      <TitleContainer
        name={`${item.surname} ${item.name} ${item.patronymic}`}
        place='full-union-member'
        path='/unionmembers'
      />
      <section className='full-union-member__container'>
        <img className='full-union-member__image' src={item.imageUrl} alt='' />
        <p className='full-union-member__short-biography'>{item.shortBiography}</p>
        {showCTA && <CTA linkText='Ноты композитора' path='/scores' />}
      </section>
      <section>
        <Tabs
          tabNamesArray={handleGenerateTabNames()}
          value={сategory}
          onChangeTab={(index: number) => setCategory(index)}
        />
        <TextContent text={unionMemberData[сategory]} place='full-union-member' />
      </section>
    </main>
  );
};

export default FullUnionMemberInfo;
