import React from 'react';
import { TitleContainer, Tabs, menuItems, ReportSkeleton } from '../components';
import { ReportPopup } from '../components/ReportPopup';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { selectReportData } from '../redux/report/selectors';
import { fetchReport } from '../redux/report/asyncActions';

const tabNames = ['Отчёт-2023', 'Отчёт-2022', 'Отчёт-2021', 'Отчёт-2020'];

const Reports = () => {
  const dispatch = useAppDispatch();
  const { item, status } = useSelector(selectReportData);
  const [reportIndex, setReportIndex] = React.useState<number>(0);
  const [isReportPopupOpen, setReportPopupOpen] = React.useState<boolean>(false);
  const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);

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
    dispatch(fetchReport(reportIndex));
  }, [dispatch, reportIndex]);

  const altText = `Отчёт за ${item.year} год`;

  return (
    <main className='reports'>
      <TitleContainer name={menuItems[6].name} place='reports' />
      <section className='reports__main-content'>
        <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setReportIndex(index)} value={reportIndex} />
        {status === 'loading' ? (
          <ReportSkeleton screenWidth={screenWidth} />
        ) : (
          <img className='reports__image' src={item.imageUrl} alt={altText} onClick={() => setReportPopupOpen(true)} />
        )}
      </section>
      <ReportPopup
        isOpen={isReportPopupOpen}
        onClose={() => setReportPopupOpen(false)}
        imageUrl={item.imageUrl}
        altText={altText}
      />
    </main>
  );
};

export default Reports;
