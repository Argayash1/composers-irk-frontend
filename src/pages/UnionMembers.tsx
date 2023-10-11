import React from 'react';

const UnionMembers: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Состав';
  }, []);

  return <div>UnionMembers</div>;
};

export default UnionMembers;
