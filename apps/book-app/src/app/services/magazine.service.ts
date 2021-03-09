import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { URLSConfigs } from '../config/urls.config';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  httpOptions = {
    headers: new HttpHeaders(
    { 
      'Access-Control-Allow-Origin':'*',
       'Content-Type': 'application/json'
    })}
    

  constructor(private http: HttpClient) { }

  getMagazines(): Observable<any> {
    return this.http.get(`${URLSConfigs.BASE_URL}/${URLSConfigs.GET_MAGAZINES}`,this.httpOptions);
  }


}