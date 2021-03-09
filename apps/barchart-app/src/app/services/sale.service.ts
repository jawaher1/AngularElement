import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { URLSConfigs } from '../config/urls.config';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  httpOptions = {
    headers: new HttpHeaders(
    { 
      'Access-Control-Allow-Origin':'*',
       'Content-Type': 'application/json'
    })}
 
    private baseUrl = `${environment.host}:${environment.port}`

  constructor(private http: HttpClient) { }

  getSales(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,this.httpOptions);
  }

   getSalesbyLibrary(name:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${URLSConfigs.GET_SALES}/${name}?name=${name}`,this.httpOptions);
}
}