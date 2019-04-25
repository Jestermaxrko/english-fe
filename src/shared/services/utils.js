export const getDaysInMonth =(month, year) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const isIsoStringsEqual = (first, second) => {
  return first.slice(0, 10) === second.slice(0, 10);
};

export const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
