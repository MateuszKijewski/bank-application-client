import { Address } from "./address.model";

export interface User {
    id: number | null,
    first_name: string,
    last_name: string,
    sex: number | null,
    phone: string,
    email: string,
    addressId: number | null,
    address: Address | null,
    token: string,
    accounts: Account[]
}