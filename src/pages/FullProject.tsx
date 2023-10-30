import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, PageTitle, SharePanel } from '../components';
import { projectsArray } from '../utils/projectsArray';

const FullProject: React.FC = () => {
  const [news, setNews] = React.useState<{ imageUrl: string; title: string; description: string }>();
  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState(false);

  const { id } = useParams();

  React.useEffect(() => {
    const newsObject = projectsArray[Number(id)];
    setNews(newsObject);
  }, [id]);

  const hadleToggleSharePanel = () => {
    setIsSharePanelOpen(!isSharePanelOpen);
  };

  if (!news) {
    return <>Загрузка проекта...</>;
  }

  return (
    <main className='full-project'>
      <PageTitle name={news.title} />
      <img className='full-project__image' src={news.imageUrl} alt='' />
      <p className='full-project__text'>{news.description}</p>
      {isSharePanelOpen ? (
        <SharePanel onClick={hadleToggleSharePanel} />
      ) : (
        <CTA linkText='Поделиться' onClick={hadleToggleSharePanel} />
      )}
    </main>
  );
};

export default FullProject;
