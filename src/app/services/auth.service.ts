import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { LoginDto } from '../models/DTOs/Auth/login-dto';
import { LoginResponseDto } from '../models/DTOs/Auth/login-response-dto';
import { User } from '../models/user-model';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/state/app.state';
import { RegisterDto } from '../models/DTOs/Auth/register-dto';
import { RegisterResponseDto } from '../models/DTOs/Auth/register-response-dto';
import { SetUserInfo } from '../ngrx/actions/user.actions';

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
    localStorage = localStorage;
    constructor(private http:HttpClient, private store: Store<AppState>) { }

    getAuthorizedHttpHeaders(): HttpHeaders {
        let jwtToken = this.getTokenFromStorage();
        return new HttpHeaders  ({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${jwtToken} `
            })
        
    }

    login(loginDto: LoginDto): Observable<LoginResponseDto> {
        const url = `${this.baseLocalUrl}/login`;
        let res = this.http.post<LoginResponseDto>(url, loginDto, unauthHttpOptions);
        return res;
    }

    register(registerDto: RegisterDto): Observable<RegisterResponseDto> {
        const url = `${this.baseLocalUrl}/register`;
        let res = this.http.post<RegisterResponseDto>(url,  registerDto, unauthHttpOptions);
        
        return res;
    }

    addTokenToStorage(jwtToken: string) {
        this.localStorage.clear();
        this.localStorage.setItem('token', jwtToken)
    }

    clearToken() {
        this.localStorage.clear();
    }

    getTokenFromStorage(): string | null {
        return this.localStorage.getItem('token');
    }

    getCurrentUser(): Observable<User> {
        const url = `${this.baseLocalUrl}/auth/me`;
        return this.http.get<User>(url, {
            headers: this.getAuthorizedHttpHeaders()
        })
    }

    async checkIfAuthorized() { 
        let token = this.getTokenFromStorage();
        if (token !== null) {
            const url = `${this.baseLocalUrl}/auth/me`;
            let response = await this.http.get(url, {
                headers: this.getAuthorizedHttpHeaders(),
                observe: 'response'
            }).toPromise();
            
            if (response.status === 200) {
                let user = <User>response.body;
                this.store.dispatch(new SetUserInfo({
                    userInfo: user
                    }))
                    return true;
                }            
            else {
                return false;
            }
        }
        return false;
    }
}

