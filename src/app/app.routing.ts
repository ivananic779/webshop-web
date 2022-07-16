import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminGuard } from './guards/admin.guard';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { GuestGuard } from './guards/guest.guard';
import { UserGuard } from './guards/user.guard';
import { WebshopLayoutComponent } from './layouts/webshop-layout/webshop-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ],
    canActivate: [AdminGuard]
  }, {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/user-layout/user-layout.module').then(m => m.UserLayoutModule)
      }
    ],
    canActivate: [UserGuard]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ],
    canActivate: [GuestGuard]
  }, {
    path: '',
    component: WebshopLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/webshop-layout/webshop-layout.module').then(m => m.WebshopLayoutModule)
      }
    ],
    canActivate: [GuestGuard]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
