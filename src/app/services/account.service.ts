import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Account } from '../models/account.model'
import { User } from '../models/user-model';
import { AppState } from '../ngrx/state/app.state';
import { Observable } from 'rxjs'
import { UserState } from '../ngrx/state/user.state';
import { AuthService } from './auth.service';
import { AllAccountsDto } from '../models/DTOs/Account/all-accounts-dto';
import { AddAccountDto } from '../models/DTOs/Account/add-account-dto';
import { AllCreditCardsDto } from '../models/DTOs/CreditCard/all-credit-cards-dto';
import { CreditCard } from '../models/credit-card.model';
import { AllTransactionsDto } from '../models/DTOs/Transaction/all-transactions-dto';

@Injectable({
    providedIn: 'root'
})

export class AccountService {
    baseLocalUrl = 'http://127.0.0.1:8000/api';

    constructor(
        private http:HttpClient,
        private authService: AuthService
        ) { }


    /* Account operations */
    getLoggedInUserAccounts(): Observable<User> {        
        const url = `${this.baseLocalUrl}/auth/me`;
        return this.http.get<User>(url, {
            headers: this.authService.getAuthorizedHttpHeaders(),            
        });
    }

    getAllAccounts(): Observable<AllAccountsDto> {
        const url = `${this.baseLocalUrl}/accounts`;
        return this.http.get<AllAccountsDto>(url, {
            headers: this.authService.getAuthorizedHttpHeaders()
        });
    }

    addAccount(addAccountDto: AddAccountDto): void {
        const url = `${this.baseLocalUrl}/accounts`;
        this.http.post(url, addAccountDto, {
            headers: this.authService.getAuthorizedHttpHeaders(),
            observe: 'response'
        }).subscribe((response) => {
            if (response.ok) {
                console.log("CREATED ACCOUNT")
            }
            else {
                console.log("ERROR DURING ACCOUNT CREATION")
            }
        })
    }

    deleteAccount(accountId: number): void {
        const url = `${this.baseLocalUrl}/accounts/${accountId}`;
        this.http.delete(url, {
            headers: this.authService.getAuthorizedHttpHeaders(),
            observe: 'response'
        }).subscribe(response => {
            if (response.ok) {
                console.log("DELETED ACCOUNT")
            }
            else {
                console.log("ERROR DURING ACCOUNT DELETION")
            }
        })
    }

    /* CreditCards operations */
    getAllAccountCreditCards(accountId: number): Observable<AllCreditCardsDto> {
        const url = `${this.baseLocalUrl}/accounts/${accountId}/creditCards`;
        return this.http.get<AllCreditCardsDto>(url, {
            headers: this.authService.getAuthorizedHttpHeaders()
        });
    }

    addCreditCardToAccount(accountId: number, cardType: string): void {
        const url = `${this.baseLocalUrl}/accounts/${accountId}/creditCards`;
        this.http.post(url, { type: cardType }, {
            headers: this.authService.getAuthorizedHttpHeaders(),
            observe: 'response'
        }).subscribe(response => {
            console.log(response);
        })
    }

    deleteCreditCardFromAccount(creditCardNumber: number): void {
        const url = `${this.baseLocalUrl}/creditCards/${creditCardNumber}`;
        this.http.delete(url, {
            headers: this.authService.getAuthorizedHttpHeaders(),
            observe: 'response'
        }).subscribe((response) => {
            if (response.ok) {
                console.log("DELETED CREDIT CARD")
            }
            else {
                console.log("ERROR DURING CREDIT CARD DELETION")
            }
        })
    }

    /* Transaction operations */
    getAllAccountTransactions(accountId: number): Observable<AllTransactionsDto> {
        const url = `${this.baseLocalUrl}/accounts/${accountId}/transactions`;
        return this.http.get<AllTransactionsDto>(url, {
            headers: this.authService.getAuthorizedHttpHeaders()
        });
    }
}