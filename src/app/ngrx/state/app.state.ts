import { Modal } from 'src/app/models/modal-model';
import { initialModalState, ModalState } from './modal.state';
import { initialUserState, UserState } from './user.state';

export interface AppState {
    modal: ModalState;
    user: UserState;
}

export const initialAppState: AppState = {
    modal: initialModalState,
    user: initialUserState
}