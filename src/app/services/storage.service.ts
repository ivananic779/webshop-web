import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setUserToken($username: string, $token: string, $remember_me: boolean): void {
    if ($remember_me) {
      localStorage.setItem('username', $username);
      localStorage.setItem('token', $token);
    } else {
      sessionStorage.setItem('username', $username);
      sessionStorage.setItem('token', $token);
    }
  }

  public getUserToken(): string {
    let token = null;

    if (token = localStorage.getItem('token')) {
      return token;
    } else {
      token = sessionStorage.getItem('token');
    }

    return token;
  }

  public getUsername(): string {
    let username = null;

    if (username = localStorage.getItem('username')) {
      return username;
    } else {
      username = sessionStorage.getItem('username');
    }

    return username;
  }

  public clear(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
