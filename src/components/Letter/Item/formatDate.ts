import { dateFormatter } from '../../../utils/dateFormatter';

export const formatDate = (date: Date): DateString => {
  const currentDate = new Date(date);
  const isToday = currentDate.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
  const isThisYear = currentDate.getFullYear() === new Date().getFullYear();
  if (isToday) return dateFormatter.toTimeString(date);
  if (isThisYear) return dateFormatter.toDateString(date);
  return dateFormatter.toFullDateString(date);
};
