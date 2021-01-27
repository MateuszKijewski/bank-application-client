import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/state/app.state';
import { Modal } from '../../../models/modal-model'
import { ModalState } from '../../../ngrx/state/modal.state'
import { ModalType } from '../../../models/modalType-enum'
import { Store } from '@ngrx/store';
import { SwitchModals } from '../../../ngrx/actions/modal.actions';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  currentModal: Observable<ModalState>;
  modalType = ModalType;

  constructor(private store: Store<AppState>) { 
    this.currentModal = store.select('modal')
  }
  
  switchModal(modalType: ModalType) {
    this.store.dispatch(new SwitchModals({ 
      modal: {
        type: modalType
      }
    }))
  }

  ngOnInit(): void {
  }

}
