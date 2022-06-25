import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
  ) {

  }

  canActivate(): boolean {
    let token = null;
    let role_name = null;

    if (!(token = this.storageService.getUserToken()) || !(role_name = this.storageService.getUserRoleName()) || role_name != 'Admin') {
      return false;
    }

    return true;
  }
  
}