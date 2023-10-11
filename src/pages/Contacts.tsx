import React from 'react';

export const Contacts: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Контакты';
  }, []);

  return <div>Contacts</div>;
};

export default Contacts;
