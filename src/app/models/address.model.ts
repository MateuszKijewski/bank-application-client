export interface Address {
    id: number | null,
    city: string,
    post_code: string,
    street_and_number: string,
    country: string,
    created_at: Date | null,
    updated_at: Date | null
}