import React from 'react';

const Media: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Медиа';
  }, []);

  return <div>Media</div>;
};

export default Media;
