export const getDaysInMonth =(month, year) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const isIsoStringsEqual = (first, second) => {
  console.log(first, second);
  return first.slice(0, 10) === second.slice(0, 10);
};