import { User } from '../../models/user-model';

export interface UserState {
    currentUser: User;
}

export const initialUserState : UserState = {
    currentUser: {
        id: null,
        firstName: '',
        lastName: '',
        sex: null,
        phone: '',
        email: '',
        addressId: null,
        address: null,
        token: '',
        accounts: []
    }
}