import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { LoginDto } from '../models/DTOs/Auth/login-dto';
import { LoginResponseDto } from '../models/DTOs/Auth/login-response-dto';

const unauthHttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseLocalUrl = 'http://127.0.0.1:8000/api';

    constructor(private http:HttpClient) { }

    login(loginDto: LoginDto): Observable<LoginResponseDto> {
        const url = `${this.baseLocalUrl}/login`;
        let res = this.http.post<LoginResponseDto>(url, loginDto, unauthHttpOptions);

        return res;
    }
}

