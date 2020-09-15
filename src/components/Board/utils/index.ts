export const getLocaleDateString = (timeString: string) => {
  const time = new Date(timeString);
  const year = time.getFullYear(),
    month = time.getMonth() + 1,
    date = time.getDate();
  return [year, month < 10 ? '0' + month : month, date < 10 ? '0' + date : date].join('-');
};
