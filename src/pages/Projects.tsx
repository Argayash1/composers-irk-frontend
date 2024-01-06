import React from 'react';
import { projectsArray } from '../utils/projectsArray';
import { ProjectBlock } from '../components/ProjectBlock';
import { TitleContainer, Pagination, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectProjectCurrentPage } from '../redux/project/selectors';
import { setCurrentPage } from '../redux/project/slice';

const Projects = () => {
  const dispatch = useAppDispatch();

  const currentPage = useSelector(selectProjectCurrentPage);
  const firstItem = currentPage * 4 - 4;
  const lastItam = currentPage * 4;

  const slicedProjectsArray = projectsArray.slice(firstItem, lastItam);

  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  return (
    <main className='projects'>
      <TitleContainer name={menuItems[3].name} place='projects' />
      <ul className='projects__list'>
        {slicedProjectsArray.map((project, index) => (
          <li key={index}>
            <ProjectBlock index={index} {...project} />
          </li>
        ))}
      </ul>
      <Pagination
        onChangePage={(page) => dispatch(setCurrentPage(page))}
        onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
        onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Projects;
