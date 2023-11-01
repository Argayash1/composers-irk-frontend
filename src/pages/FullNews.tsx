import React from 'react';
import { useParams } from 'react-router-dom';
import { newsArray } from '../utils/newsArray';
import { CTA, PageTitle, SharePanel } from '../components';

const FullNews: React.FC = () => {
  const [news, setNews] = React.useState<{ imageUrl: string; title: string; newsText: string; createdAt: string }>();
  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    const newsObject = newsArray[Number(id)];
    setNews(newsObject);
  }, [id]);

  if (!news) {
    return <>Загрузка новости...</>;
  }

  const hadleToggleSharePanel = () => {
    setIsSharePanelOpen(!isSharePanelOpen);
  };

  return (
    <main className='full-news'>
      <PageTitle name={news.title} place='full-news' />
      <span className='full-news__date'>{news.createdAt}</span>
      <img className='full-news__image' src={news.imageUrl} alt='' />
      <p className='full-news__text'>{news.newsText}</p>
      {isSharePanelOpen ? (
        <SharePanel itemTitle={news.title} onClick={hadleToggleSharePanel} />
      ) : (
        <CTA linkText='Поделиться' onClick={hadleToggleSharePanel} />
      )}
    </main>
  );
};

export default FullNews;
