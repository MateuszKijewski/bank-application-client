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
    to_account: string,
    from_account_id: number,
    to_account_id: number
}