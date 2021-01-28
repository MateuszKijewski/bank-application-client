import { User } from '../../models/user-model';

export interface UserState {
    currentUser: User;
}

export const initialUserState : UserState = {
    currentUser: {
        id: null,
        first_name: '',
        last_name: '',
        sex: null,
        phone: '',
        email: '',
        addressId: null,
        address: null,
        token: '',
        accounts: []
    }
}