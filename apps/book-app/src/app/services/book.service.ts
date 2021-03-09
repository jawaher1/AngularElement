import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { URLSConfigs } from '../config/urls.config';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpOptions = {
    headers: new HttpHeaders(
    { 
      'Access-Control-Allow-Origin':'*',
       'Content-Type': 'application/json'
    })}


  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(`${URLSConfigs.BASE_URL}/${URLSConfigs.GET_BOOKS}`,this.httpOptions);
  }

   getBooksbyLibrary(name:string): Observable<any> {
    return this.http.get(`${URLSConfigs.BASE_URL}/${URLSConfigs.GET_LIBRARIES}/${name}`,this.httpOptions);
}
}