import React from 'react';
import { useParams } from 'react-router-dom';
import { articlesArray } from '../utils/articlesArray';
import { FullArticleSkeleton, TitleContainer, TextContent } from '../components';

const FullArticle = () => {
  const [article, setArticle] = React.useState<{
    imageUrl: string;
    title: string;
    articleDescription: string;
    articleText: string[];
    createdAt: string;
  }>();

  const { id } = useParams();

  React.useEffect(() => {
    const articleObject = articlesArray[Number(id)];
    setArticle(articleObject);
  }, [id]);

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
