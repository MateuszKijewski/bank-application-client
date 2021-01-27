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
        address: {
            id: null,
            city: '',
            post_code: '',
            street_and_number: '',
            country: '',
            created_at: null,
            updated_at: null,
        },
        token: ''
    }
}