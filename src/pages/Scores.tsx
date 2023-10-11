import React from 'react';

const Scores: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Ноты';
  }, []);

  return <div>Scores</div>;
};

export default Scores;
