import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(
    private router: Router,
    public storageService: StorageService,
    private helperService: HelperService,
  ) {

  }

  ngOnInit() {
    this.menuItems = this.helperService.filterRoutesBasedOnUserType();
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  public logout() {
    this.storageService.logout();
  }
}
