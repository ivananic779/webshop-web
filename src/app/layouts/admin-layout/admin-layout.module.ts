import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AddUserFormComponent } from 'src/app/pages/user-management/user-form/add-user-form/add-user-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { EditUserFormComponent } from 'src/app/pages/user-management/user-form/edit-user-form/edit-user-form.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
  ],
  declarations: [
    UserManagementComponent,
    AddUserFormComponent,
    EditUserFormComponent,
  ]
})

export class AdminLayoutModule { }
