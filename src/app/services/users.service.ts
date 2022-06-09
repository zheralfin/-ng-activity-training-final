import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient) { }

  getById(id: any) : Observable<any> {
    return this._httpClient.get('http://simplecrud-env.eba-m82z7m6j.ap-southeast-1.elasticbeanstalk.com/v1/users/' + id);
  }

  deleteById(id: any) : Observable<any> {
    return this._httpClient.delete('http://simplecrud-env.eba-m82z7m6j.ap-southeast-1.elasticbeanstalk.com/v1/users/' + id);
  }
}
