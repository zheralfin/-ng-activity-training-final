import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getUnsecuredUsers(): Observable<any> {
    return this._httpClient.get('http://simplecrud-env.eba-m82z7m6j.ap-southeast-1.elasticbeanstalk.com/v1/unsecured/users');
  }

}
