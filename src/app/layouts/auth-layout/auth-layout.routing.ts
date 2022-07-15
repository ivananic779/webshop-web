import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',            component:  LoginComponent },
    { path: 'register',         component:  RegisterComponent },
    { path: 'forgot-password',  component:  ForgotPasswordComponent },
    { path: 'dashboard',        component:  DashboardComponent },
];
