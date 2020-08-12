import moment from 'moment'

export const date30DaysAgo = () => {
  return moment(moment().subtract(30, 'days')).format('YYYY-MM-DD')
}
