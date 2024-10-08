import React from 'react';
import { ProjectBlock } from '../components/ProjectBlock';
import { TitleContainer, Pagination, ProjectSkeleton } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectProjectsData } from '../redux/project/selectors';
import { setCurrentPage } from '../redux/project/slice';
import { fetchProjects } from '../redux/project/asyncActions';
import { menuItems } from '../utils/constants';
import { useResize } from '../hooks/useResize';

const Projects = () => {
  const dispatch = useAppDispatch();

  const { currentPage, items, totalPages, status } = useSelector(selectProjectsData);

  const { screenWidth } = useResize();

  const [cardsLimit, setCardsLimit] = React.useState<number>(0);
  const [fetching, setFetching] = React.useState(false);

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

  const handleScroll = React.useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const scrollThreshold = 100; // Допустимая погрешность

    if (screenWidth <= 1126 && !fetching && scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
      setFetching(true);
      dispatch(setCurrentPage(currentPage + 1));
      setTimeout(() => {
        setFetching(false);
      }, 500);
    }
  }, [currentPage, dispatch, fetching, screenWidth]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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
      {totalPages > 1 && (
        <Pagination
          onChangePage={(page) => dispatch(setCurrentPage(page))}
          onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
          onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </main>
  );
};

export default Projects;
