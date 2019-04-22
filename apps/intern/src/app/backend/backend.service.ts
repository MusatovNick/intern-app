import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequestOptions } from './interfcaes/http-request-options.interface';

const BASE = 'api';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}

  public post$<T>(url: string, body: any, options: HttpRequestOptions = {}): Observable<T> {
    options.headers = this.addToken(options.headers);
    return this.http.post<T>(`${BASE}${url}`, body, options);
  }

  public get$<T>(url: string, options: HttpRequestOptions = {}): Observable<T> {
    options.headers = this.addToken(options.headers);
    return this.http.get<T>(`${BASE}${url}`, options);
  }

  public put$<T>(url: string, body: any, options: HttpRequestOptions = {}): Observable<T> {
    options.headers = this.addToken(options.headers);
    return this.http.put<T>(`${BASE}${url}`, body, options);
  }

  public delete$<T>(url: string, options: HttpRequestOptions = {}): Observable<T> {
    options.headers = this.addToken(options.headers);
    return this.http.delete<T>(`${BASE}${url}`, options);
  }

  private addToken(headers: HttpHeaders = new HttpHeaders()): HttpHeaders {
    return headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
}
