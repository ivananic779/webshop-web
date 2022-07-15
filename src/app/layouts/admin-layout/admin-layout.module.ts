import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AddUserFormComponent } from 'src/app/pages/user-management/user-form/add-user-form/add-user-form.component';
import { EditUserFormComponent } from 'src/app/pages/user-management/user-form/edit-user-form/edit-user-form.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { AdminLayoutRoutes } from './admin-layout.routing';

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
