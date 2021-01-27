import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ModalType } from 'src/app/models/modalType-enum';
import { Gender } from '../../../models/gender-enum';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @Output() switchModal: EventEmitter<ModalType> = new EventEmitter();


  genders: typeof Gender  = Gender;
  modalType = ModalType;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchModal(modalType: ModalType){
    this.switchModal.emit(modalType);
  }

}
