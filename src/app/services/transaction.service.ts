import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AuthService } from './auth.service';
import { AllTransactionsDto } from '../models/DTOs/Transaction/all-transactions-dto';
import { AddTransactionDto } from '../models/DTOs/Transaction/add-transaction-dto';

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

    addTransaction(addTransactionDto: AddTransactionDto): void {
        const url = `${this.baseLocalUrl}/transactions`;
        this.http.post(url, addTransactionDto, {
            headers: this.authService.getAuthorizedHttpHeaders(),
            observe: 'response'
        }).subscribe(response => {
            if (response.ok){
                console.log("CREATED NEW RESPONSE");
            }
            else {
                console.log("ERROR DURING RESPONSE CREATION");
            }
        })
    }
}