import React from 'react';
import { projectArray } from '../utils/projectsArray';
import { ProjectBlock } from '../components/ProjectBlock';
import { PageTitle, menuItems } from '../components';

const Projects: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  return (
    <main className='projects'>
      <PageTitle name={menuItems[3].name} />
      <ul className='projects__list'>
        {projectArray.map((project, index) => (
          <li key={index}>
            <ProjectBlock index={index} {...project} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;
