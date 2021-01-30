import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AuthService } from './auth.service';
import { AllTransactionsDto } from '../models/DTOs/Transaction/all-transactions-dto';

@Injectable({
    providedIn: 'root'
})

export class TransactionService {
    baseLocalUrl = 'http://127.0.0.1:8000/api';

    constructor(
        private http:HttpClient,
        private authService: AuthService
        ) { }

    getAllUserTransactions(): Observable<AllTransactionsDto> {
        const url = `${this.baseLocalUrl}/transactions`;
        return this.http.get<AllTransactionsDto>(url, {
            headers: this.authService.getAuthorizedHttpHeaders()
        });
    }
}