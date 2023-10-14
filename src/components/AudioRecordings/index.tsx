import React from 'react';

import './AudioRecordings.scss';

const audioItems = [
  {
    url: 'http://composersirk.ru/files/d/11.mp3',
    title: 'Анатолий Тепляков "Спеши на меня наглядеться". Исп. Марина Заитова 1',
  },
  {
    url: 'http://composersirk.ru/files/d/12.mp3',
    title: 'Анатолий Тепляков "Спеши на меня наглядеться". Исп. Марина Заитова 2',
  },
  {
    url: 'http://composersirk.ru/files/d/10.mp3',
    title: 'Анатолий Тепляков "Спеши на меня наглядеться". Исп. Марина Заитова 3',
  },
];

export const AudioRecordings = () => {
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
