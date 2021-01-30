export interface AddTransactionDto {
    from_account_id: number,
    to_account_id: number,
    amount: number,
    title: string,
    transfer_date: string
}