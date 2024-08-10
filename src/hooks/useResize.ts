import React from 'react';

export const useResize = () => {
  const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);
  const [clientWidth, setClientWidth] = React.useState<number>(document.documentElement.clientWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setClientWidth(document.documentElement.clientWidth);
    };

    handleResize();

    let timeoutId: NodeJS.Timeout;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, 500);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return { screenWidth, clientWidth };
};
