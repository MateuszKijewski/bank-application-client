import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RegisterResponseDto } from 'src/app/models/DTOs/Auth/register-response-dto';
import { ModalType } from 'src/app/models/modalType-enum';
import { AuthService } from 'src/app/services/auth.service';
import { Gender } from '../../../models/gender-enum';
import { Store } from '@ngrx/store';
import { Authorize } from '../../../ngrx/actions/user.actions';
import { AppState } from '../../../ngrx/state/app.state';
import { User } from '../../../models/user-model';
import { SetUserInfo } from '../../../ngrx/actions/user.actions';
import { Router } from '@angular/router'
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @Output() switchModal: EventEmitter<ModalType> = new EventEmitter();


  genders: typeof Gender  = Gender;
  modalType = ModalType;

  formEmail: string;
  formPassword: string;
  formFirstName: string;
  formLastName: string;
  formPhoneNumber: string;
  formGender: number;
  formDateOfBirth: Date;
  formCity: string;
  formCountry: string;
  formAddres: string;
  formPostalCode: string;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router ) { }

  ngOnInit(): void {
    
  }

  onSwitchModal(modalType: ModalType){
    this.switchModal.emit(modalType);
  }

  onSubmit() {
    this.authService.register({
      email: this.formEmail,
      password: this.formPassword,
      first_name: this.formFirstName,
      last_name: this.formLastName,
      phone: this.formPhoneNumber,
      sex: this.formGender,
      birthday: this.getCorrectDate(this.formDateOfBirth),
      address: {
        city: this.formCity,
        street_and_number: this.formAddres,
        country: this.formCountry,
        post_code: this.formPostalCode
      }
    }).subscribe((response: RegisterResponseDto) => {
      if (response.access_token) {
        this.authService.addTokenToStorage(response.access_token);
        if (this.authService.checkIfAuthorized()) {
          this.navigateToDashboard();
        }
        else {
          alert("Error");
          this.reloadLoginForm();
        }
      }
    })
  }

  navigateToDashboard(){
    this.router.navigate(['/'])
  }

  reloadLoginForm() {
    this.router.navigate(['/login'])
  }

  getCorrectDate(date: Date): string {
    console.log(date);
    let result = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
    console.log(result);
    return result;
  }
}
