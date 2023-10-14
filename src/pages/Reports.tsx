import React from 'react';
import { PageTitle, Tabs } from '../components';

const tabNames = ['Всё отчёты', 'Отчёты-2023', 'Отчёт-2022', 'Отчёты-2021'];

const Reports: React.FC = () => {
  const [reportYear, setReportYear] = React.useState(0);

  const handleChangeCategory = (index: number) => {
    setReportYear(index);
  };

  React.useEffect(() => {
    document.title = 'Отчёты';
  }, []);

  return (
    <div className='reports'>
      <PageTitle name='Отчёты' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeCategory} value={reportYear} />
    </div>
  );
};

export default Reports;
