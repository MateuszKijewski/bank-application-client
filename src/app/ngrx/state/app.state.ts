import { Modal } from 'src/app/models/modal-model';
import { initialModalState, ModalState } from './modal.state';

export interface AppState {
    modal: ModalState;
}

export const initialAppState: AppState = {
    modal: initialModalState
}