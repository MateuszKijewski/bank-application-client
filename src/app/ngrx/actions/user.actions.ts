import { Action } from '@ngrx/store';
import { User } from '../../models/user-model';

export enum UserActionTypes {
    Authorize = '[User] Authorize',

    SetUserInfo = '[User] Set User Info'
}

export class Authorize implements Action {
    public readonly type = UserActionTypes.Authorize;

    constructor(public payload: { jwtToken: string}) { }
}

export class SetUserInfo implements Action {
    public readonly type = UserActionTypes.SetUserInfo;

    constructor(public payload: { userInfo: User}) { }
}

export type UserActions = Authorize | SetUserInfo;