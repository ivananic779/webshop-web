import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { UserLayoutRoutes } from './user-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
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
    UserProfileComponent,
  ]
})

export class UserLayoutModule { }
