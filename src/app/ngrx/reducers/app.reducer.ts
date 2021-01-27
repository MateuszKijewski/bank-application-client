import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { modalReducer } from './modal.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
    modal: modalReducer
}