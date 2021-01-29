import { Bank } from './bank.model';
import { CreditCard } from './credit-card.model';

export interface Account {
    id: number,
    account_name: string,
    account_number: string,
    user_id: number,
    bank: Bank
    credit_cards: CreditCard[],
    balance: number,
    currency: string
}