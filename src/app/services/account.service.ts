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
import { AddAccountDto } from '../models/DTOs/Account/add-account-dto';

@Injectable({
    providedIn: 'root'
})

export class AccountService {
    baseLocalUrl = 'http://127.0.0.1:8000/api';

    constructor(
        private http:HttpClient,
        private store: Store<AppState>,
        private authService: AuthService
        ) { }

    getLoggedInUserAccounts(): Observable<User> {        
        const url = `${this.baseLocalUrl}/auth/me`;
        return this.http.get<User>(url, {
            headers: this.authService.getAuthorizedHttpHeaders(),            
        });
    }

    addAccount(addAccountDto: AddAccountDto): void {
        const url = `${this.baseLocalUrl}/accounts`;
        this.http.post(url, addAccountDto, {
            headers: this.authService.getAuthorizedHttpHeaders(),
            observe: 'response'
        }).subscribe((response) => {
            if (response.status === 201) {
                console.log("CREATED_USER")
            }
            else {
                console.log("ERROR DURING USER CREATION")
            }
        })
    }
}