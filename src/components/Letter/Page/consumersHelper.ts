import { User } from '../../../@types/entities/User';
import { getDeclensionWordByCount } from './../../../utils/wordHelper';

const visibleConsumersCount = 3;
const consumersDeclensions = ['получателей', 'получатель', 'получателя'];

export function getVisibleConsumersString(users: User[]) {
  if (users.length === 0) return 'Вы';
  let consumersString = 'Вы, ';
  const usersString = users
    .slice(0, visibleConsumersCount)
    .map(user => `${user.name} ${user.surname}`)
    .join(', ');
  return consumersString + usersString;
}

export function getHiddenConsumersString(users: User[]) {
  let hiddenConsumersCount = 0;
  if (users.length - visibleConsumersCount > 0) {
    hiddenConsumersCount = users.length - visibleConsumersCount;
  } else {
    return undefined;
  }

  return hiddenConsumersCount
    ? `еще ${hiddenConsumersCount} ${getDeclensionWordByCount(hiddenConsumersCount, consumersDeclensions)}`
    : '';
}
