import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { modalReducer } from './modal.reducer';
import { userReducer } from './user.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
    modal: modalReducer,
    user: userReducer
}