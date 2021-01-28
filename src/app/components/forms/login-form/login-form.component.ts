import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoginResponseDto } from 'src/app/models/DTOs/Auth/login-response-dto';
import { ModalType } from 'src/app/models/modalType-enum';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import { Authorize } from '../../../ngrx/actions/user.actions';
import { AppState } from '../../../ngrx/state/app.state';
import { User } from '../../../models/user-model';
import { SetUserInfo } from '../../../ngrx/actions/user.actions';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {  
  @Output() switchModal: EventEmitter<any> = new EventEmitter();
  loginEmail: string;
  loginPassword: string;
  window: Window;

  modalType = ModalType;
  constructor(
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  onSwitchModal(modalType: ModalType){
    this.switchModal.emit(modalType);
  }

  onSubmit() {
    this.authService.login({
      email: this.loginEmail,
      password: this.loginPassword
    }).subscribe((response: LoginResponseDto) => {
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
    });
  }

  navigateToDashboard(){
    this.router.navigate(['/'])
  }

  reloadLoginForm() {
    this.router.navigate(['/login'])
  }
}
