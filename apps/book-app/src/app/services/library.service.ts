import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


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
  private baseUrl = 'http://localhost:3000/library';
    //private baseUrl = ` ${environment.host}:${environment.port}${environment.prefix}`

  constructor(private http: HttpClient) { }

  getLibraries(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,this.httpOptions);
  }


}