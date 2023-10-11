import React from 'react';

const Reports: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Отчёты';
  }, []);

  return <div>Reports</div>;
};

export default Reports;
