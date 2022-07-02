function getTodayDate() {
  const MONTHS = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  const DAY = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  const date = new Date() 
  const day = DAY[date.getDay()].slice(0, 3)
  const number = date.getDate()
  const month = MONTHS[date.getMonth() + 1]

  return `${day}, ${number} ${month}`
}

export default getTodayDate