import { UnionMember } from './membersArray';

export const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

export const compareBySurname = (a: UnionMember, b: UnionMember) => {
  const surnameA = a.surname.toUpperCase();
  const surnameB = b.surname.toUpperCase();

  if (surnameA < surnameB) {
    return -1;
  }
  if (surnameA > surnameB) {
    return 1;
  }
  return 0;
};

export const handleChangeSecondsToMinutesAndSeconds = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60)
    .toString()
    .padStart(2, '0');

  return `${minutes}.${seconds}`;
};
