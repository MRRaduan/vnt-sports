const everyday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekends = ['Sat", "Sun'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const transformRidesDays = rideDays => {

  return isSameArray(rideDays, everyday)
    ? 'Every day'
    : isSameArray(rideDays, weekends)
      ? 'Weekends'
      : isSameArray(rideDays, weekdays)
        ? 'Week day'
        : rideDays;


  // return rideDays === everyday
  //   ? 'Every days'
  //   : rideDays === weekends
  //     ? 'Weekends'
  //     : rideDays === weekdays
  //       ? 'Weekdays'
  //       : rideDays;


}

const isSameArray = (arr1, arr2) => {
  return arr1.length == arr2.length && arr1.every(function (element, index) {
    return element === arr2[index];
  });
}

export {
  transformRidesDays
}