import { initialUserState, UserState } from '../state/user.state';
import { UserActionTypes, UserActions } from '../actions/user.actions';
import { initialAppState } from '../state/app.state';
import { User } from '../../models/user-model';

export const userReducer = (state = initialUserState, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionTypes.Authorize: {            
            return {
                ...state,
                currentUser: {...state.currentUser, token: action.payload.jwtToken}
            }
        }

        case UserActionTypes.SetUserInfo: {
            let verifiedUser: User = <User>{ };
            let copy = Object.assign(verifiedUser, action.payload.userInfo)
            copy.token = state.currentUser.token;            

            return {
                ...state,
                currentUser: copy
            }
        }

        default:
            return state;
    }
}