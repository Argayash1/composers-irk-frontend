import { useState, useEffect } from 'react';

export const useTitle = (defTitle: string) => {
  const [title, setTitle] = useState<string>(defTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return [setTitle];
};
