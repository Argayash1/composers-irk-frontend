import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FullArticleSkeleton, TitleContainer, TextContent } from '../components';
import { useAppDispatch } from '../redux/store';
import { selectArticleData } from '../redux/article/selectors';
import { useSelector } from 'react-redux';
import { fetchArticleById } from '../redux/article/asyncActions';

const FullArticle = () => {
  const dispatch = useAppDispatch();
  const { item, status } = useSelector(selectArticleData);

  // const navigate = useNavigate();

  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  if (status === 'loading') {
    return <FullArticleSkeleton />;
  }

  return (
    <main className='full-article'>
      <TitleContainer name={item.title} place='full-article' path='/aboutus' />
      <section>
        <div className='full-article__container'>
          <img className='full-article__image' src={item.imageUrl} alt='' />
          <p className='full-article__description'>{item.articleDescription}</p>
        </div>
        <TextContent text={item.articleText} place='full-article' />
      </section>
    </main>
  );
};

export default FullArticle;
