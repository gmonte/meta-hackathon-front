import moment from 'moment/moment'

const sortDateRange = (...dates) => {
  dates = dates.map(date => moment(date))
  dates.sort((left, right) => left.diff(right))
  return dates.map(date => date.format('L'))
}

export default sortDateRange
