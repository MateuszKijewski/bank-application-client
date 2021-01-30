import { Bank } from '../models/bank.model';

export interface Transaction {
    id: number,
    transfer_type: string,
    date: Date,
    amount: number,
    currency: string,
    current_balance: number,
    title: string,
    transfer_date: Date,
    from_account: string,
    from_bank: Bank,
    to_account: string,
    to_bank: Bank,
    from_account_id: number,
    to_account_id: number
}