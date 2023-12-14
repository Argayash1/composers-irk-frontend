import React from 'react';
import { PageTitle, Tabs, menuItems } from '../components';
import { reportsArray } from '../utils/reportsArray';
import { ReportPopup } from '../components/ReportPopup';

const tabNames = ['Всё отчёты', 'Отчёты-2023', 'Отчёт-2022', 'Отчёты-2021'];

const Reports = () => {
  const [reportYear, setReportYear] = React.useState<number>(0);
  const [isReportPopupOpen, setReportPopupOpen] = React.useState<boolean>(false);

  const handleChangeCategory = (index: number) => {
    setReportYear(index);
  };

  React.useEffect(() => {
    document.title = 'Отчёты';
  }, []);

  return (
    <main className='reports'>
      <PageTitle name={menuItems[6].name} />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeCategory} value={reportYear} />
      <img
        className='reports__image'
        src={reportsArray[reportYear].imageUrl}
        alt={reportsArray[reportYear].altText}
        onClick={() => setReportPopupOpen(true)}
      />
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
