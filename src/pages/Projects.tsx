import React from 'react';
import { projectsArray } from '../utils/projectsArray';
import { ProjectBlock } from '../components/ProjectBlock';
import { PageTitle, Pagination, menuItems } from '../components';

const Projects: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  return (
    <main className='projects'>
      <PageTitle name={menuItems[3].name} />
      <ul className='projects__list'>
        {projectsArray.map((project, index) => (
          <li key={index}>
            <ProjectBlock index={index} {...project} />
          </li>
        ))}
      </ul>
      <Pagination />
    </main>
  );
};

export default Projects;
