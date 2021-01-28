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
import { routes } from '../../../app-routing.module'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {  
  @Output() switchModal: EventEmitter<any> = new EventEmitter();
  loginEmail: string;
  loginPassword: string;

  modalType = ModalType;
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
    this.authService.login({
      email: this.loginEmail,
      password: this.loginPassword
    }).subscribe((response: LoginResponseDto) => {
      console.log(response.message);
      if (response.access_token) {
        this.authorizeUser(response.access_token);
        this.navigateToDashboard();
        this.authService.getUserInfo(response.access_token).subscribe((response: User) => {
          console.log(`Retrieved info about user: ${response.first_name} ${response.last_name}`);
          this.fillUserInfo(response);
        })
      }
    });
  }

  authorizeUser(jwtToken: string) {
    this.store.dispatch(new Authorize({
      jwtToken: jwtToken
    }))
  }

  fillUserInfo(user: User) {
    this.store.dispatch(new SetUserInfo({
        userInfo: user
    }))
  }

  navigateToDashboard(){
    this.router.navigate(['/'])
  }

}
