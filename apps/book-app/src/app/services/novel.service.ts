import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NovelService {
  httpOptions = {
    headers: new HttpHeaders(
    { 
      'Access-Control-Allow-Origin':'*',
       'Content-Type': 'application/json'
    })}
  private baseUrl = 'http://localhost:3000/novel';
    //private baseUrl = ` ${environment.host}:${environment.port}${environment.prefix}`

  constructor(private http: HttpClient) { }

  getNovels(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,this.httpOptions);
  }


}