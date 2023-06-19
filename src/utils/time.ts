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
