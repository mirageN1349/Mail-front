export const dateFormatter = {
  isToday(date: Date): boolean {
    const currentDate = new Date(date);
    return currentDate.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
  },
  toTimeString(date: Date): DateString {
    return date.toLocaleTimeString('ru-RU', {
      hour: 'numeric',
      minute: 'numeric',
    });
  },
  toFullDateString(date: Date): DateString {
    return date.toLocaleDateString('ru-RU');
  },
  toDateString(date: Date): DateString {
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
  },
};
