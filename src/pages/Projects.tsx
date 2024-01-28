import React from 'react';
import { ProjectBlock } from '../components/ProjectBlock';
import { TitleContainer, Pagination, ProjectSkeleton } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectProjectsData } from '../redux/project/selectors';
import { setCurrentPage } from '../redux/project/slice';
import { fetchProjects } from '../redux/project/asyncActions';
import { menuItems } from '../utils/constants';

const Projects = () => {
  const dispatch = useAppDispatch();

  const { currentPage, items, totalPages, status } = useSelector(selectProjectsData);

  const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);
  const [cardsLimit, setCardsLimit] = React.useState<number>(0);

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

  React.useEffect(() => {
    const handleSetLimit = (): number => {
      let limit;

      if (screenWidth > 622) {
        limit = 4;
      } else {
        limit = 3;
      }

      setCardsLimit(limit);

      return limit;
    };

    dispatch(fetchProjects({ currentPage, limit: handleSetLimit(), screenWidth }));
  }, [dispatch, currentPage, screenWidth]);

  const projects = items.map((project, index) => (
    <li key={project._id}>
      <ProjectBlock {...project} />
    </li>
  ));

  const skeletons = [...new Array(cardsLimit)].map((_, index) => (
    <li key={index}>
      <ProjectSkeleton screenWidth={screenWidth} />
    </li>
  ));

  return (
    <main className='projects'>
      <TitleContainer name={menuItems[3].name} place='projects' />
      <section>
        <ul className='projects__list'>{status === 'loading' ? skeletons : projects}</ul>
      </section>
      <Pagination
        onChangePage={(page) => dispatch(setCurrentPage(page))}
        onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
        onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default Projects;
