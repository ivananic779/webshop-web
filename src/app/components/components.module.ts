import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiComponent } from './ui/ui.component';

import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BlockUIModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UiComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UiComponent,
  ]
})
export class ComponentsModule { }
