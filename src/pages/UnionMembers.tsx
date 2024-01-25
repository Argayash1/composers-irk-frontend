import React from 'react';
import { TitleContainer, Pagination, UnionMemberBlock, menuItems, UnionMemberSkeleton } from '../components';
import { compareBySurname, hasVerticalScroll } from '../utils/utils';
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/unionMember/slice';
import { selectUnionMembersData } from '../redux/unionMember/selectors';
import { useAppDispatch } from '../redux/store';
import clsx from 'clsx';
import { fetchUnionMembers } from '../redux/unionMember/asyncActions';

const UnionMembers: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, currentPage, totalPages } = useSelector(selectUnionMembersData);

  const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);
  const [clientWidth, setClientWidth] = React.useState<number>(document.documentElement.clientWidth);
  const [cardsLimit, setCardsLimit] = React.useState<number>(0);

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

  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

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
          {unionMembers ? unionMembers : skeletons}
        </ul>
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

export default UnionMembers;
