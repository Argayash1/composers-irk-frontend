import React from 'react';

export const useTitle = (defTitle: string) => {
  const [title, setTitle] = React.useState<string>(defTitle);

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return [setTitle];
};
