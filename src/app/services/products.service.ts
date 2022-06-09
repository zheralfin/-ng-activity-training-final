import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll (): Observable<any> {
    return this._httpClient.get('http://simplecrud-env.eba-m82z7m6j.ap-southeast-1.elasticbeanstalk.com/v1/products');
  }
}
