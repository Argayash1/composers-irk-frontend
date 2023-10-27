import React from 'react';
import { useParams } from 'react-router-dom';
import { articlesArray } from '../utils/articlesArray';
import { PageTitle } from '../components';
import { TextContent } from '../components/TextContent';

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
    return <>Загрузка статьи...</>;
  }

  return (
    <main className='full-article'>
      <PageTitle name={article.title} />
      <div className='full-article__container'>
        <img className='full-article__image' src={article.imageUrl} alt='' />
        <p className='full-article__description'>{article.articleDescription}</p>
      </div>
      <TextContent textArray={article.articleText} />
      {/* <ul className='full-article__paragraph-list'>
        {article.articleText.map((string, index) => (
          <li key={index}>
            <p>{string}</p>
          </li>
        ))}
      </ul> */}
    </main>
  );
};

export default FullArticle;
