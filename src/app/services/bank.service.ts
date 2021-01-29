import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bank } from "../models/bank.model";
import { AllBanksDto } from "../models/DTOs/Bank/all-banks-dto";
import { AppState } from "../ngrx/state/app.state";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})

export class BankService {
    baseLocalUrl = 'http://127.0.0.1:8000/api';

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    getAllBanks(): Observable<AllBanksDto> {
        const url = `${this.baseLocalUrl}/banks`;
        return this.http.get<AllBanksDto>(url, {
            headers: this.authService.getAuthorizedHttpHeaders()
        })
    }
}