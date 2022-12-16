import CartIcon from './../assets/icons/shopping_cart.svg';
import GovernmentIcon from './../assets/icons/government.svg';
import TraveIcon from './../assets/icons/plane.svg';
import KeyIcon from './../assets/icons/key.svg';
import TicketsIcon from './../assets/icons/tickets.svg';
import FinancesIcon from './../assets/icons/finances.svg';
import { MailCategory } from '../@types/entities/Mail';

export const letterCategoryIcon: Record<MailCategory, string> = {
  finances: FinancesIcon,
  shop: CartIcon,
  registration: KeyIcon,
  travel: TraveIcon,
  tickets: TicketsIcon,
  taxes: GovernmentIcon,
};
