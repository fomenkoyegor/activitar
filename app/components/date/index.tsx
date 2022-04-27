import {FC} from "react";
import { isValid, parseISO, format } from 'date-fns'

const DateString = ({ dateString = Date.now() }) => {
  return <time dateTime={dateString}>{format(dateString, 'LLLL	d, yyyy')}</time>
}

export default DateString;