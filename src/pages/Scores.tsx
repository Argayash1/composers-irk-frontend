import React from 'react';
import { TitleContainer, Tabs, menuItems } from '../components';
import { allScores, ScoreItem } from '../utils/scoresArray';

interface IScoreItems {
  [key: number]: ScoreItem[];
}

const tabNames = ['Все ноты', 'Вокал', 'Фортепиано', 'Баян, аккордеон'];

const pianoScores = allScores.filter((score) => score.category === 'piano');
const vocalScores = allScores.filter((score) => score.category === 'voice');
const bajanScores = allScores.filter((score) => score.category === 'bajan');

const Scores = () => {
  const [category, setCategory] = React.useState<number>(0);

  React.useEffect(() => {
    document.title = 'Ноты';
  }, []);

  const scoreItems: IScoreItems = {
    0: allScores,
    1: vocalScores,
    2: pianoScores,
    3: bajanScores,
  };

  return (
    <main className='scores'>
      <TitleContainer name={menuItems[4].name} place='scores' />
      <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setCategory(index)} value={category} />
      <ul className='scores__list'>
        {scoreItems[category].map((scoreItem, index) => (
          <li key={index}>
            <a className='scores__link' href={scoreItem.url}>
              <div className='scores__link-image'></div>
              {scoreItem.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Scores;
