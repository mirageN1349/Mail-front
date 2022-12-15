export const dateFormatter = {
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
