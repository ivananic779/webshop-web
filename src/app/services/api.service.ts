import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as ApiModels from '../models/api-models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  /**
   * Auth, login, register...
   */

  public login($username, $password): Observable<ApiModels.APIResponse<null>> {
    return this.http.post<ApiModels.APIResponse<null>>(`${this.baseUrl}/login`, {username: $username, password: $password})
      .pipe(map(res => res));
  }

  /**
   * Users
   */

  public getUsers(): Observable<ApiModels.APIResponse<ApiModels.Users>> {
    return this.http.get<ApiModels.APIResponse<ApiModels.Users>>(`${this.baseUrl}/users`)
      .pipe(map(res => res));
  }

  public postUser($user: ApiModels.User): Observable<ApiModels.APIResponse<[]>> {
    return this.http.post<ApiModels.APIResponse<[]>>(`${this.baseUrl}/users`, $user)
      .pipe(map(res => res));
  }

  public deleteUser($id: number): Observable<ApiModels.APIResponse<[]>> {
    return this.http.delete<ApiModels.APIResponse<[]>>(`${this.baseUrl}/users/${$id}`)
      .pipe(map(res => res));
  }

  public getLanguages(): Observable<ApiModels.APIResponse<ApiModels.Language[]>> {
    return this.http.get<ApiModels.APIResponse<ApiModels.Language[]>>(`${this.baseUrl}/languages`)
      .pipe(map(res => res));
  }
}