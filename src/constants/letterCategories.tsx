import CartIcon from './../assets/icons/shopping_cart.svg';
import GovernmentIcon from './../assets/icons/government.svg';
import TraveIcon from './../assets/icons/plane.svg';
import KeyIcon from './../assets/icons/key.svg';
import TicketsIcon from './../assets/icons/tickets.svg';
import FinancesIcon from './../assets/icons/finances.svg';
import { MailCategory } from '../@types/entities/Mail';

type EngMailCategory = 'shop' | 'finances' | 'registration' | 'travel' | 'tickets' | 'taxes';

export const letterCategoryIcon: Record<EngMailCategory, string> = {
  finances: FinancesIcon,
  shop: CartIcon,
  registration: KeyIcon,
  travel: TraveIcon,
  tickets: TicketsIcon,
  taxes: GovernmentIcon,
};

export const letterCategoryName: Record<EngMailCategory, MailCategory> = {
  finances: 'Финансы',
  shop: 'Заказы',
  registration: 'Регистрации',
  travel: 'Путешевствия',
  tickets: 'Билеты',
  taxes: 'Штрафы и налоги',
};

export const getLetterCategoryIcon = (flag: MailCategory) => {
  const categoryKey = Object.keys(letterCategoryName).find(key => letterCategoryName[key] === flag);
  if (!categoryKey) return;
  return letterCategoryIcon[categoryKey];
};
