import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { LoginDto } from '../models/DTOs/Auth/login-dto';
import { LoginResponseDto } from '../models/DTOs/Auth/login-response-dto';
import { User } from '../models/user-model';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/state/app.state';

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
    constructor(private http:HttpClient, private store: Store<AppState>) { }

    getAuthorizedHttpOptions(jwtToken: string): Object {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${jwtToken} `
            })
        }
    }

    login(loginDto: LoginDto): Observable<LoginResponseDto> {
        const url = `${this.baseLocalUrl}/login`;
        let res = this.http.post<LoginResponseDto>(url, loginDto, unauthHttpOptions);

        return res;
    }

    getUserInfo(jwtToken: string): Observable<User> {
        const url = `${this.baseLocalUrl}/auth/me`;
        let options = this.getAuthorizedHttpOptions(jwtToken);
        let res = this.http.get<User>(url, options);

        return res;
    }
}

