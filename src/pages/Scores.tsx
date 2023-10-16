import React from 'react';
import { PageTitle, Tabs } from '../components';

const tabNames = ['Все ноты', 'Вокал', 'Фортепиано'];

const scoresData = [
  { title: 'Д. Григоруцэ Вечное движение', url: 'https://cloud.mail.ru/public/8gMB/Ry8UWbtFU', category: 'piano' },
  { title: 'C. Михайлов "Ната-вальс"', url: 'https://cloud.mail.ru/public/QSjX/xcjiwBJUm', category: 'piano' },
  { title: 'Л. Янковская "Песня о Пскове"', url: 'https://cloud.mail.ru/public/8gMB/Ry8UWbtFU', category: 'voice' },
];

const pianoScores = scoresData.filter((scoreData) => scoreData.category === 'piano');
const vocalScores = scoresData.filter((scoreData) => scoreData.category === 'voice');

const Scores: React.FC = () => {
  const [scoreCategory, setScoreCategory] = React.useState(0);

  const handleChangeScoreCategory = (index: number) => {
    setScoreCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Ноты';
  }, []);

  return (
    <div className='scores'>
      <PageTitle name='Ноты' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeScoreCategory} value={scoreCategory} />
      <ul className='scores__list'>
        {scoreCategory === 0
          ? scoresData.map((score, index) => (
              <li key={index}>
                <a className='scores__link' href={score.url}>
                  <div className='scores__link-image'></div>
                  {score.title}
                </a>
              </li>
            ))
          : scoreCategory === 2
          ? pianoScores.map((pianoScore, index) => (
              <li key={index}>
                <a className='scores__link' href={pianoScore.url}>
                  <div className='scores__link-image'></div>
                  {pianoScore.title}
                </a>
              </li>
            ))
          : vocalScores.map((pianoScore, index) => (
              <li key={index}>
                <a className='scores__link' href={pianoScore.url}>
                  <div className='scores__link-image'></div>
                  {pianoScore.title}
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Scores;
