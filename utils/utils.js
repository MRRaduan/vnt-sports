const everyday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekends = ['Sat', 'Sun'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const transformRidesDays = rideDays => {
  return isSameArray(rideDays, everyday)
    ? 'Every day'
    : isSameArray(rideDays, weekends)
      ? 'Weekends'
      : isSameArray(rideDays, weekdays)
        ? 'Week days'
        : rideDays.toString();
}

const isSameArray = (arr1, arr2) => {
  return arr1.length == arr2.length && arr1.every((el, index) => {
    return el === arr2[index];
  });
}

export {
  transformRidesDays
}