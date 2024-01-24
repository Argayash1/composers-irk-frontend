import React from 'react';
import { unionMembersArray } from '../utils/membersArray';
import { TitleContainer, Pagination, UnionMemberBlock, menuItems, UnionMemberSkeleton } from '../components';
import { compareBySurname, hasVerticalScroll } from '../utils/utils';
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/unionMember/slice';
import { selectUnionMemberCurrentPage } from '../redux/unionMember/selectors';
import { useAppDispatch } from '../redux/store';
import clsx from 'clsx';

const UnionMembers: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentPage = useSelector(selectUnionMemberCurrentPage);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [clientWidth, setClientWidth] = React.useState(document.documentElement.clientWidth);

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

  const handleSetCardsPerPge = (): number => {
    if (screenWidth >= 1170) {
      return 12;
    }
    if (screenWidth < 1170 && screenWidth >= 767) {
      return 9;
    }

    if (screenWidth < 767) {
      return 8;
    }

    return 0; // или любое другое значение по умолчанию
  };

  const cardsPerPage = handleSetCardsPerPge();

  const firstItem = currentPage * cardsPerPage - cardsPerPage;
  const lastItam = currentPage * cardsPerPage;

  const membersArraySortedBySurnameAndSliced = [...unionMembersArray].sort(compareBySurname).slice(firstItem, lastItam);

  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  const unionMembers = membersArraySortedBySurnameAndSliced.map((member, index) => (
    <li key={index}>
      <UnionMemberBlock {...member} />
    </li>
  ));

  const skeletons = [...new Array(cardsPerPage)].map((_, index) => (
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
      />
    </main>
  );
};

export default UnionMembers;
