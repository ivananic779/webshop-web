import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private router: Router,
  ) {

  }

  canActivate(): boolean {
    let role_name = null;

    if (!(this.storageService.getUserToken()) || !(role_name = this.storageService.getUserRoleName()) || (role_name != 'User' && role_name != 'Admin')) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
