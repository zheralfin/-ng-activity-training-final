import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new Subject();

  constructor(
    private _httpClient: HttpClient
  ) { }

  login(credentials: any): Observable<any>{
    return this._httpClient.post('http://simplecrud-env.eba-m82z7m6j.ap-southeast-1.elasticbeanstalk.com/v1/auth/login', credentials);
  }

  isLogged() {
    return localStorage.getItem('token');
  }
}
