const everyday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekends = ['Sat', 'Sun'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const transformRidesDays = rideDays => {
  // if (rideDays == everyday) {
  //   return 'Every day'
  // } else {
  //   ret 
  // }

  return rideDays == everyday
    ? 'Every daysa'
    : rideDays === weekends
      ? 'Weekends'
      : rideDays === weekdays
        ? 'Weekdays'
        : rideDays;


}

export {
  transformRidesDays
}