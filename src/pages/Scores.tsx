import React from 'react';
import { PageTitle, Tabs } from '../components';

const tabNames = ['Все ноты', 'Вокал', 'Фортепиано'];

const allScores = [
  { title: 'Д. Григоруцэ Вечное движение', url: 'https://cloud.mail.ru/public/8gMB/Ry8UWbtFU', category: 'piano' },
  { title: 'C. Михайлов "Ната-вальс"', url: 'https://cloud.mail.ru/public/QSjX/xcjiwBJUm', category: 'piano' },
  { title: 'Л. Янковская "Песня о Пскове"', url: 'https://cloud.mail.ru/public/8gMB/Ry8UWbtFU', category: 'voice' },
];

const pianoScores = allScores.filter((score) => score.category === 'piano');
const vocalScores = allScores.filter((score) => score.category === 'voice');

const Scores: React.FC = () => {
  const [scoreCategory, setScoreCategory] = React.useState(0);

  const handleChangeScoreCategory = (index: number) => {
    setScoreCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Ноты';
  }, []);

  const scoreItems = scoreCategory === 0 ? allScores : scoreCategory === 1 ? vocalScores : pianoScores;

  return (
    <div className='scores'>
      <PageTitle name='Ноты' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeScoreCategory} value={scoreCategory} />
      <ul className='scores__list'>
        {scoreItems.map((scoreItem, index) => (
          <li key={index}>
            <a className='scores__link' href={scoreItem.url}>
              <div className='scores__link-image'></div>
              {scoreItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scores;
