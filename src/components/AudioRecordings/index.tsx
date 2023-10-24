import React from 'react';

import './AudioRecordings.scss';

const audioItems = [
  {
    url: 'https://cloud.mail.ru/public/3HFG/NhYbZd2GD',
    title: 'Анатолий Тепляков "Спеши на меня наглядеться". Исп. Марина Заитова 1',
  },
  {
    url: 'https://cloud.mail.ru/public/ASym/34Ckk5d8c',
    title: 'Анатолий Тепляков "Спеши на меня наглядеться". Исп. Марина Заитова 2',
  },
  {
    url: 'https://cloud.mail.ru/public/VUVp/LhpJGdSC5',
    title: 'Анатолий Тепляков "Спеши на меня наглядеться". Исп. Марина Заитова 3',
  },
];

export const AudioRecordings: React.FC = () => {
  return (
    <ul className='audio-recordings'>
      {audioItems.map((audioItem, index) => (
        <li key={index}>
          <h2 className='audio-recordings__item-title'>{audioItem.title}</h2>
          <audio className='audio-recordings__item-audio' src={audioItem.url} controls></audio>
        </li>
      ))}
    </ul>
  );
};
