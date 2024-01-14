import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, TitleContainer, SharePanel } from '../components';
import { projectsArray } from '../utils/projectsArray';

const FullProject = () => {
  const [project, setProject] = React.useState<{ imageUrl: string; title: string; description: string }>();
  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState<boolean>(false);

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
      <TitleContainer name={project.title} place='full-project' path='/projects' />
      <section className='full-project__container'>
        <img className='full-project__image' src={project.imageUrl} alt='' />
        <p className='full-project__text'>{project.description}</p>
        {isSharePanelOpen ? (
          <SharePanel itemTitle={project.title} onClick={hadleToggleSharePanel} />
        ) : (
          <CTA onClick={hadleToggleSharePanel} place='full-project' />
        )}
      </section>
    </main>
  );
};

export default FullProject;
