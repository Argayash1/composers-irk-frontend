import React from 'react';

export const AboutUs: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Про нас';
  }, []);

  return <div>AboutUs</div>;
};

export default AboutUs;
