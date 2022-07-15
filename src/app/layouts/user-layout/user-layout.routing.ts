import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UserGuard } from 'src/app/guards/user.guard';

export const UserLayoutRoutes: Routes = [
    { path: 'dashboard',                component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [UserGuard] },
];
