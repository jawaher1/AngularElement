import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { URLSConfigs } from '../config/urls.config';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  httpOptions = {
    headers: new HttpHeaders(
    { 
      'Access-Control-Allow-Origin':'*',
       'Content-Type': 'application/json'
    })}
  
    

  constructor(private http: HttpClient) { }

  getLibraries(): Observable<any> {
    return this.http.get(`${URLSConfigs.BASE_URL}/${URLSConfigs.GET_LIBRARIES}`,this.httpOptions);
  }


}