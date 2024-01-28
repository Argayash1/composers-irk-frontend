import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FullArticleSkeleton, TitleContainer, TextContent } from '../components';
import axios from 'axios';
import { localApi } from '../utils/constants';

const FullArticle = () => {
  const [article, setArticle] = React.useState<{
    imageUrl: string;
    title: string;
    articleDescription: string;
    articleText: string[];
    createdAt: string;
  }>();
  const navigate = useNavigate();

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchArticles() {
      try {
        const { data } = await axios.get(`${localApi}/articles/${id}`);
        setArticle(data);
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }

    fetchArticles();
  }, [id, navigate]);

  if (!article) {
    return <FullArticleSkeleton />;
  }

  return (
    <main className='full-article'>
      <TitleContainer name={article.title} place='full-article' path='/aboutus' />
      <section>
        <div className='full-article__container'>
          <img className='full-article__image' src={article.imageUrl} alt='' />
          <p className='full-article__description'>{article.articleDescription}</p>
        </div>
        <TextContent textArray={article.articleText} place='full-article' />
      </section>
    </main>
  );
};

export default FullArticle;
