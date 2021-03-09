import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


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
  private baseUrl = 'http://localhost:3000/library';
  private baseUrl2 = 'http://localhost:3000/book';
    //private baseUrl = ` ${environment.host}:${environment.port}${environment.prefix}`

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl2}`,this.httpOptions);
  }

   getBooksbyLibrary(name:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`,this.httpOptions);
}
}