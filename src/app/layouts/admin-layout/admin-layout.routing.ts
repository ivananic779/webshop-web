import { Routes } from '@angular/router';

import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-management',          component: UserManagementComponent },
];
