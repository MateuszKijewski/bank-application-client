import { Address } from "./address.model";
import { Account } from "./account.model";

export interface User {
    id: number | null,
    firstName: string,
    lastName: string,
    sex: number | null,
    phone: string,
    email: string,
    addressId: number | null,
    address: Address | null,
    token: string,
    accounts: Account[]
}