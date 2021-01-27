import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoginResponseDto } from 'src/app/models/DTOs/Auth/login-response-dto';
import { ModalType } from 'src/app/models/modalType-enum';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import { Authorize } from '../../../ngrx/actions/user.actions';
import { AppState } from '../../../ngrx/state/app.state';

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
  constructor(private authService: AuthService, private store: Store<AppState>) { }

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
      this.authorizeUser(response.access_token);
    })
  }

  authorizeUser(jwtToken: string) {
    this.store.dispatch(new Authorize({
      jwtToken: jwtToken
    }))
  }

}
