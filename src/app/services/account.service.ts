import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Account } from '../models/account.model'
import { User } from '../models/user-model';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/state/app.state';
import { Observable } from 'rxjs'
import { UserState } from '../ngrx/state/user.state';
import { AuthService } from './auth.service';
import { AllAccountsDto } from '../models/DTOs/Account/all-accounts-dto';

@Injectable({
    providedIn: 'root'
})

export class AccountService {
    baseLocalUrl = 'http://127.0.0.1:8000/api/accounts';

    constructor(
        private http:HttpClient,
        private store: Store<AppState>,
        private authService: AuthService
        ) { }

    getLoggedInUserAccounts(): Observable<AllAccountsDto> {        
        const url = `${this.baseLocalUrl}`
        return this.http.get<AllAccountsDto>(url, {
            headers: this.authService.getAuthorizedHttpHeaders(),            
        });
    }
}