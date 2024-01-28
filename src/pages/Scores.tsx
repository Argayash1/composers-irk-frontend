import React from 'react';
import { TitleContainer, Tabs } from '../components';
import { useAppDispatch } from '../redux/store';
import { fetchScores } from '../redux/score/asyncActions';
import { useSelector } from 'react-redux';
import { selectScoresData } from '../redux/score/selectors';
import { setCategoryId } from '../redux/score/slice';
import { menuItems } from '../utils/constants';

const tabNames = ['Все ноты', 'Вокал', 'Фортепиано', 'Баян, аккордеон'];

const Scores = () => {
  const dispatch = useAppDispatch();
  const { categoryId, items } = useSelector(selectScoresData);

  React.useEffect(() => {
    document.title = 'Ноты';
  }, []);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    dispatch(fetchScores(category));
  }, [dispatch, categoryId]);

  return (
    <main className='scores'>
      <TitleContainer name={menuItems[4].name} place='scores' />
      <section>
        <Tabs tabNamesArray={tabNames} onChangeTab={(index) => dispatch(setCategoryId(index))} value={categoryId} />
        <ul className='scores__list'>
          {items.map((item, index) => (
            <li key={index}>
              <a className='scores__link' href={item.url}>
                <div className='scores__link-image'></div>
                {item.composer + ' ' + item.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Scores;
