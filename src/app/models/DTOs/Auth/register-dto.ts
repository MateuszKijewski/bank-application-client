export interface RegisterDto {
    email: string,
    first_name: string,
    last_name: string,
    phone: string,
    sex: number,
    birthday: Date,
    address: {
        city: string,
        street_and_number: string,
        country: string,
        post_code: string
    }
}