import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';
import { HelperService } from 'src/app/services/helper.service';
import { UiService } from '../ui/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  public username: string;

  constructor(
    location: Location,
    public storageService: StorageService,
    private helperService: HelperService,
  ) {
    this.location = location;
    this.username = null;
  }

  ngOnInit() {
    this.listTitles = this.helperService.filterRoutesBasedOnUserType();
    this.username = this.storageService.getUserUsername();
  }

  public getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout() {
    this.storageService.logout();
  }

}
