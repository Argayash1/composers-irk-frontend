import React from 'react';
import { TitleContainer, Tabs, ReportSkeleton } from '../components';
import { ReportPopup } from '../components/ReportPopup';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { selectReportData } from '../redux/report/selectors';
import { fetchReport } from '../redux/report/asyncActions';
import { menuItems } from '../utils/constants';

const Reports = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectReportData);
  const [reportIndex, setReportIndex] = React.useState<number>(0);
  const [isReportPopupOpen, setReportPopupOpen] = React.useState<boolean>(false);
  const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);

  const isMounted = React.useRef<boolean>(false);

  React.useEffect(() => {
    document.title = 'Отчёты';
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
    if (!isMounted.current) {
      dispatch(fetchReport());
    }

    isMounted.current = true;
  }, [dispatch, reportIndex]);

  if (status === 'loading') {
    return <ReportSkeleton screenWidth={screenWidth} />;
  }

  const report = items[reportIndex];
  const tabNames = items.map((obj) => `Отчёт-${obj.year}`);

  return (
    <main className='reports'>
      <TitleContainer name={menuItems[6].name} place='reports' />
      <section className='reports__main-content'>
        <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setReportIndex(index)} value={reportIndex} />
        <img
          className='reports__image'
          src={report.imageUrl}
          alt={`Отчёт за ${report.year} год`}
          onClick={() => setReportPopupOpen(true)}
        />
      </section>
      <ReportPopup
        isOpen={isReportPopupOpen}
        onClose={() => setReportPopupOpen(false)}
        imageUrl={report.imageUrl}
        altText={`Отчёт за ${report.year} год`}
      />
    </main>
  );
};

export default Reports;
