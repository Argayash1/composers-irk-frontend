import React from 'react';
import { projectsArray } from '../utils/projectsArray';
import { ProjectBlock } from '../components/ProjectBlock';
import { TitleContainer, Pagination, menuItems, ProjectSkeleton } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectProjectCurrentPage } from '../redux/project/selectors';
import { setCurrentPage } from '../redux/project/slice';

const Projects = () => {
  const dispatch = useAppDispatch();

  const currentPage = useSelector(selectProjectCurrentPage);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    let timeoutId: NodeJS.Timeout;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, 300);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const firstItem = currentPage * 4 - 4;
  const lastItam = currentPage * 4;

  const slicedProjectsArray = projectsArray.slice(firstItem, lastItam);

  const projects = slicedProjectsArray.map((project, index) => (
    <li key={index}>
      <ProjectBlock index={index} {...project} />
    </li>
  ));

  const skeletons = [...new Array(projectsArray.length)].map((_, index) => (
    <li>
      <ProjectSkeleton screenWidth={screenWidth} />
    </li>
  ));

  return (
    <main className='projects'>
      <TitleContainer name={menuItems[3].name} place='projects' />
      <ul className='projects__list'>{projects ? projects : skeletons}</ul>
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
