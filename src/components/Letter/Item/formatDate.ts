import { dateFormatter } from '../../../utils/dateFormatter';

export const formatDate = (date: Date | string): DateString => {
  const currentDate = new Date(date);
  const isToday =
    currentDate.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
  const isThisYear = currentDate.getFullYear() === new Date().getFullYear();
  if (isToday) return dateFormatter.toTimeString(currentDate);
  if (isThisYear) return dateFormatter.toDateString(currentDate);
  return dateFormatter.toFullDateString(currentDate);
};
