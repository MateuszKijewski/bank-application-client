import { Modal } from '../../models/modal-model';
import { ModalType } from '../../models/modalType-enum';

export interface ModalState {
    currentModal: Modal;
}

export const initialModalState : ModalState = {
    currentModal: {
        type: ModalType.LOGIN_MODAL
    }
}