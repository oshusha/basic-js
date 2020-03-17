module.exports = function getSeason(date) {

  if (date === undefined) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error;

  if (date.getMonth() > 1 && date.getMonth() < 5) {
    return 'spring';
  }
  else if (date.getMonth() > 4 && date.getMonth() < 8) {
    return 'summer';
  }
  else if (date.getMonth() > 7 && date.getMonth() < 11) {
    return 'autumn';
  }
  return 'winter';
};
