import { initialUserState, UserState } from '../state/user.state';
import { UserActionTypes, UserActions } from '../actions/user.actions';
import { initialAppState } from '../state/app.state';

export const userReducer = (state = initialUserState, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionTypes.Authorize: {            
            return {
                ...state,
                currentUser: {...state.currentUser, token: action.payload.jwtToken}
            }
        }

        case UserActionTypes.SetUserInfo: {
            let verifiedUser = action.payload.userInfo;
            verifiedUser.token = state.currentUser.token;

            return {
                ...state,
                currentUser: verifiedUser
            }
        }

        default:
            return state;
    }
}