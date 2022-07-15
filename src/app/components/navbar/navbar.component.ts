import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

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
    private storageService: StorageService,
    private router: Router,
    private helperService: HelperService,
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = this.helperService.filterRoutesBasedOnUserType();
    this.username = this.storageService.getUserUsername();
  }

  getTitle() {
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
    this.storageService.clear();
    this.router.navigate(['/login']);
  }

}
