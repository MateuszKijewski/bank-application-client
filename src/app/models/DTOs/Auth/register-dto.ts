export interface RegisterDto {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    phone: string,
    sex: number,
    birthday: string,
    address: {
        city: string,
        street_and_number: string,
        country: string,
        post_code: string
    }
}