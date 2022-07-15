import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as ApiModels from '../models/api-models';
import { StorageService } from './storage.service';
import { Md5 } from 'ts-md5/dist/md5';

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
    $password = Md5.hashStr($password);

    return this.http.post<ApiModels.APIResponse<ApiModels.Login>>(`${this.baseUrl}/login`, { username: $username, password: $password })
      .pipe(map(res => res));
  }

  /**
   * Users
   */

  public getUsers(): Observable<ApiModels.APIResponse<ApiModels.User[]>> {
    return this.http.get<ApiModels.APIResponse<ApiModels.User[]>>(`${this.baseUrl}/users`, this.getHeaders())
      .pipe(map((response: any) => {
        const ret = Object.assign(new ApiModels.APIResponse<ApiModels.User[]>(), response);
        ret.data = [];
        response.data?.forEach((element: ApiModels.User) => {
          ret.data.push(Object.assign(new ApiModels.User(), element));
        });
        return ret;
      }));
  }

  public postUser($user: ApiModels.User): Observable<ApiModels.APIResponse<[]>> {
    $user.password = Md5.hashStr($user.password);
    $user.confirm_password = Md5.hashStr($user.confirm_password);

    return this.http.post<ApiModels.APIResponse<[]>>(`${this.baseUrl}/user`, $user, this.getHeaders())
      .pipe(map((response: any) => {
        const ret = Object.assign(new ApiModels.APIResponse<ApiModels.User>(), response);
        ret.data = Object.assign(new ApiModels.User(), ret.data);
        return ret;
      }));
  }

  public editUser($user: ApiModels.User): Observable<ApiModels.APIResponse<[]>> {
    return this.http.post<ApiModels.APIResponse<[]>>(`${this.baseUrl}/user`, $user, this.getHeaders())
      .pipe(map((response: any) => {
        const ret = Object.assign(new ApiModels.APIResponse<ApiModels.User>(), response);
        ret.data = Object.assign(new ApiModels.User(), ret.data);
        return ret;
      }));
  }

  public deleteUser($id: number): Observable<ApiModels.APIResponse<[]>> {
    return this.http.delete<ApiModels.APIResponse<[]>>(`${this.baseUrl}/user/${$id}`, this.getHeaders())
      .pipe(map((response: any) => {
        const ret = Object.assign(new ApiModels.APIResponse<ApiModels.User>(), response);
        ret.data = Object.assign(new ApiModels.User(), ret.data);
        return ret;
      }));
  }

  public changeUserPassword($id: number, $password: string, $confirm_password: string): Observable<ApiModels.APIResponse<[]>> {
    $password = Md5.hashStr($password);
    $confirm_password = Md5.hashStr($confirm_password);

    return this.http.post<ApiModels.APIResponse<[]>>(`${this.baseUrl}/user/change_password`, { id: $id, password: $password, confirm_password: $confirm_password }, this.getHeaders())
      .pipe(map((response: any) => {
        const ret = Object.assign(new ApiModels.APIResponse<ApiModels.User>(), response);
        ret.data = Object.assign(new ApiModels.User(), ret.data);
        return ret;
      }));
  }

  /**
   * Tranaslations
   */

  public getLanguages(): Observable<ApiModels.APIResponse<ApiModels.Language[]>> {
    return this.http.get<ApiModels.APIResponse<ApiModels.Language[]>>(`${this.baseUrl}/languages`, this.getHeaders())
      .pipe(map(res => res));
  }
}