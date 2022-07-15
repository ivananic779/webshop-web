import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private router: Router,
  ) { }

  public setUserToken($username: string, $token: string, $role_name: string, $remember_me: boolean): void {
    if ($remember_me) {
      localStorage.setItem('username', $username);
      localStorage.setItem('token', $token);
      localStorage.setItem('role_name', $role_name);
    } else {
      sessionStorage.setItem('username', $username);
      sessionStorage.setItem('token', $token);
      sessionStorage.setItem('role_name', $role_name);
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

  public getUserUsername(): string {
    let username = null;

    if (username = localStorage.getItem('username')) {
      return username;
    } else {
      username = sessionStorage.getItem('username');
    }

    return username;
  }

  public getUserType(): string {
    let role_name = null;

    if (role_name = localStorage.getItem('role_name')) {
      return role_name
    } else {
      role_name = sessionStorage.getItem('role_name');
    }

    return role_name;
  }

  public clear(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  public logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
