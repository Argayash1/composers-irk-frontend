import React from 'react';
import { TitleContainer, Pagination, UnionMemberBlock, UnionMemberSkeleton } from '../components';
import { compareBySurname, hasVerticalScroll } from '../utils/utils';
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/unionMember/slice';
import { selectUnionMembersData } from '../redux/unionMember/selectors';
import { useAppDispatch } from '../redux/store';
import clsx from 'clsx';
import { fetchUnionMembers } from '../redux/unionMember/asyncActions';
import { menuItems } from '../utils/constants';

const UnionMembers: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, currentPage, totalPages, status } = useSelector(selectUnionMembersData);

  const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);
  const [clientWidth, setClientWidth] = React.useState<number>(document.documentElement.clientWidth);
  const [cardsLimit, setCardsLimit] = React.useState<number>(0);
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setClientWidth(document.documentElement.clientWidth);
    };

    let timeoutId: NodeJS.Timeout;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, 500);
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

      if (screenWidth >= 1170) {
        limit = 12;
      } else if (screenWidth < 1170 && screenWidth >= 767) {
        limit = 9;
      } else if (screenWidth < 767) {
        limit = 8;
      } else {
        limit = 0;
      }

      setCardsLimit(limit);

      return limit;
    };

    dispatch(fetchUnionMembers({ currentPage, limit: handleSetLimit(), screenWidth }));
  }, [dispatch, currentPage, screenWidth]);

  const membersArraySortedBySurnameAndSliced = [...items].sort(compareBySurname);

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

  const unionMembers = membersArraySortedBySurnameAndSliced.map((member, index) => (
    <li key={member._id}>
      <UnionMemberBlock {...member} />
    </li>
  ));

  const skeletons = [...new Array(cardsLimit)].map((_, index) => (
    <li key={index} className='news-container__news-list-item'>
      <UnionMemberSkeleton screenWidth={screenWidth} />
    </li>
  ));

  const setTabletModificator = (screenWidth <= 1280 && hasVerticalScroll()) || clientWidth < 1280;

  return (
    <main className='union-members'>
      <TitleContainer name={`${menuItems[2].name} ИООО Союза композиторов`} place='union-members' />
      <section>
        <ul className={clsx('union-members__list', setTabletModificator && 'union-members__list_gap_mobile')}>
          {status === 'loading' ? skeletons : unionMembers}
        </ul>
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

export default UnionMembers;
