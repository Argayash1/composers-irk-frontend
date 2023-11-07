import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, PageTitle, SharePanel } from '../components';
import { projectsArray } from '../utils/projectsArray';

const FullProject: React.FC = () => {
  const [project, setProject] = React.useState<{ imageUrl: string; title: string; description: string }>();
  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState(false);

  const { id } = useParams();

  React.useEffect(() => {
    const newsObject = projectsArray[Number(id)];
    setProject(newsObject);
  }, [id]);

  const hadleToggleSharePanel = () => {
    setIsSharePanelOpen(!isSharePanelOpen);
  };

  if (!project) {
    return <>Загрузка проекта...</>;
  }

  return (
    <main className='full-project'>
      <PageTitle name={project.title} />
      <img className='full-project__image' src={project.imageUrl} alt='' />
      <p className='full-project__text'>{project.description}</p>
      {isSharePanelOpen ? (
        <SharePanel itemTitle={project.title} onClick={hadleToggleSharePanel} />
      ) : (
        <CTA linkText='Поделиться' onClick={hadleToggleSharePanel} />
      )}
    </main>
  );
};

export default FullProject;