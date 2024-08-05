export const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

export const handleChangeSecondsToMinutesAndSeconds = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const handleFormateDate = (date: string): string => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};

export const hasVerticalScroll = () => {
  const pageHeight = document.body.clientHeight - document.documentElement.clientHeight;

  if (pageHeight < 0) {
    return true;
  } else {
    return false;
  }
};
