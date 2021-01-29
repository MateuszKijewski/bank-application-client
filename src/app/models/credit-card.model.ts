export interface CreditCard {
    id: number,
    type: string,
    number: string,
    exp_date: string,
    cvv: string,
    account_id: number,
    active: number,
    limit_per_day: number,
    created_at: Date,
    updated_at: Date
}