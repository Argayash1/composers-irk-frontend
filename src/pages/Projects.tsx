import React from 'react';
import { projectsArray } from '../utils/projectsArray';
import { ProjectBlock } from '../components/ProjectBlock';
import { PageTitle, Pagination, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { selectCurrentPage } from '../redux/searchSlice/selectors';

const Projects = () => {
  const currentPage = useSelector(selectCurrentPage);
  const firstItem = currentPage * 4 - 4;
  const lastItam = currentPage * 4;

  const slicedProjectsArray = projectsArray.slice(firstItem, lastItam);

  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  return (
    <main className='projects'>
      <PageTitle name={menuItems[3].name} />
      <ul className='projects__list'>
        {slicedProjectsArray.map((project, index) => (
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
