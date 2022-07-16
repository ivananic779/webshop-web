import { Routes } from '@angular/router';
import { ProductsAdministrationComponent } from 'src/app/pages/products-administration/products-administration.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'user-management',          component: UserManagementComponent },
    { path: 'products-administration',  component: ProductsAdministrationComponent },
];
