export interface User {
    id: number | null,
    first_name: string,
    last_name: string,
    sex: number | null,
    phone: string,
    email: string,
    addressId: number | null,
    address: {
        id: number | null,
        city: string,
        post_code: string,
        street_and_number: string,
        country: string,
        created_at: Date | null,
        updated_at: Date | null
    },
    token: string;
}