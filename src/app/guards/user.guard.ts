import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
  ) {

  }

  canActivate(): boolean {
    let token = null;
    let role_name = null;

    if (!(token = this.storageService.getUserToken()) || !(role_name = this.storageService.getUserRoleName()) || (role_name != 'User' && role_name != 'Admin')) {
      return false;
    }

    return true;
  }
  
}
