const everyday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekends = ['Sat', 'Sun'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const transformRidesDays = rideDays => {
  return isSameArray(rideDays, everyday) ?
    'Every day' :
    isSameArray(rideDays, weekends) ?
    'Weekends' :
    isSameArray(rideDays, weekdays) ?
    'Week days' :
    rideDays.toString();
}

const isSameArray = (arr1, arr2) => !arr2.map(item => arr1.includes(item)).includes(false)

export {
  transformRidesDays
}