import React from 'react';
import { TitleContainer, Tabs, menuItems } from '../components';
import { reportsArray } from '../utils/reportsArray';
import { ReportPopup } from '../components/ReportPopup';

const tabNames = ['Отчёт-2023', 'Отчёт-2022', 'Отчёт-2021', 'Отчёт-2020'];

const Reports = () => {
  const [reportYear, setReportYear] = React.useState<number>(0);
  const [isReportPopupOpen, setReportPopupOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.title = 'Отчёты';
  }, []);

  return (
    <main className='reports'>
      <TitleContainer name={menuItems[6].name} place='reports' />
      <section className='reports__main-content'>
        <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setReportYear(index)} value={reportYear} />
        <img
          className='reports__image'
          src={reportsArray[reportYear].imageUrl}
          alt={reportsArray[reportYear].altText}
          onClick={() => setReportPopupOpen(true)}
        />
      </section>
      <ReportPopup
        isOpen={isReportPopupOpen}
        onClose={() => setReportPopupOpen(false)}
        imageUrl={reportsArray[reportYear].imageUrl}
        altText={reportsArray[reportYear].altText}
      />
    </main>
  );
};

export default Reports;
