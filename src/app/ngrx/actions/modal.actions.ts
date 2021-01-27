import { Action } from '@ngrx/store';
import { Modal } from '../../models/modal-model';

export enum ModalActionTypes {
    SwitchModals = '[Modal] Switch Modals'
}



export class SwitchModals implements Action {
    public readonly type = ModalActionTypes.SwitchModals;

    constructor(public payload: { modal: Modal }) { }
}

export type ModalActions = SwitchModals;