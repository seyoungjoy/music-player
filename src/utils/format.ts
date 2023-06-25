export const formatTime = (time: number | undefined) => {
  if (!time || isNaN(time) || time < 0) {
    return '00:00';
  }

  const minute = Math.floor(time / 60);
  const second = Math.floor(time % 60);

  const minutes = minute < 10 ? `0${minute}` : minute;
  const seconds = second < 10 ? `0${second}` : second;

  return `${minutes}:${seconds}`;
};

export const stringDateToDottedFormat = (stringDate: string) => {
  const date = new Date(stringDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
