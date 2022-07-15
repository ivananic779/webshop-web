import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as ApiModels from '../models/api-models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) {
  }

  private getHeaders() {
    this.headers = new HttpHeaders({
      'Authorization': this.storageService.getUserToken()
    });

    return {
      'headers': this.headers
    }
  }

  /**
   * Auth, login, register...
   */

  public login($username: string, $password: string): Observable<ApiModels.APIResponse<ApiModels.Login>> {
    return this.http.post<ApiModels.APIResponse<ApiModels.Login>>(`${this.baseUrl}/login`, { username: $username, password: $password })
      .pipe(map(res => res));
  }

  /**
   * Users
   */

  public getUsers(): Observable<ApiModels.APIResponse<ApiModels.User[]>> {
    return this.http.get<ApiModels.APIResponse<ApiModels.User[]>>(`${this.baseUrl}/users`, this.getHeaders())
      .pipe(map(res => res));
  }

  public postUser($user: ApiModels.User): Observable<ApiModels.APIResponse<[]>> {
    return this.http.post<ApiModels.APIResponse<[]>>(`${this.baseUrl}/user`, $user, this.getHeaders())
      .pipe(map(res => res));
  }

  public deleteUser($id: number): Observable<ApiModels.APIResponse<[]>> {
    return this.http.delete<ApiModels.APIResponse<[]>>(`${this.baseUrl}/user/${$id}`, this.getHeaders())
      .pipe(map(res => res));
  }

  public getLanguages(): Observable<ApiModels.APIResponse<ApiModels.Language[]>> {
    return this.http.get<ApiModels.APIResponse<ApiModels.Language[]>>(`${this.baseUrl}/languages`, this.getHeaders())
      .pipe(map(res => res));
  }
}