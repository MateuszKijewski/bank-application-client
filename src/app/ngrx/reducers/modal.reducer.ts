import { initialModalState, ModalState } from '../state/modal.state';
import { ModalActionTypes, ModalActions } from '../actions/modal.actions';

export const modalReducer = (state = initialModalState, action: ModalActions): ModalState => {
    switch(action.type) {
        case ModalActionTypes.SwitchModals: {
            return {
                ...state,
                currentModal: action.payload.modal
            }
        }

        default:
            return state;
    }
}