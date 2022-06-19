import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as ApiModels from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  // get(path: string, params: any = {}): Observable<any> {
  //   return this.http.get(`${this.baseUrl}${path}`, { params })
  //     .pipe(map(res => res));
  // }

  // post(path: string, body: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}${path}`, body)
  //     .pipe(map(res => res));
  // }

  // put(path: string, body: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}${path}`, body)
  //     .pipe(map(res => res));
  // }

  // delete(path: string): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}${path}`)
  //     .pipe(map(res => res));
  // }

  // patch(path: string, body: any): Observable<any> {
  //   return this.http.patch(`${this.baseUrl}${path}`, body)
  //     .pipe(map(res => res));
  // }

  public getUsers(): Observable<ApiModels.APIResponse<ApiModels.Users>> {
    return this.http.get<ApiModels.APIResponse<ApiModels.Users>>(`${this.baseUrl}/users`)
      .pipe(map(res => res));
  }

  public postUser($user): Observable<ApiModels.APIResponse<[]>> {
    return this.http.post<ApiModels.APIResponse<[]>>(`${this.baseUrl}/users`, $user)
      .pipe(map(res => res));
  }
}