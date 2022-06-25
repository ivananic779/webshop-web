import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/components/ui/ui.service';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public rememberMe: boolean;

  constructor(
    private apiService: ApiService,
    private uiService: UiService,
    private storageService: StorageService,
    private router: Router,
  ) {
    this.username = null;
    this.password = null;
    this.rememberMe = false;
  }

  ngOnInit() {
  }

  public login() {
    this.uiService.toggleLoading();

    try {
      this.apiService.login(this.username, this.password).subscribe(res => {
        if (res.status == "OK") {
          this.storageService.setUserToken(this.username, res.data.token, this.rememberMe);

          this.uiService.toggleLoading();

          this.router.navigate(['/user-management']);
        } else {
          this.uiService.toggleLoading();
          this.uiService.showError(res.message);
        }
      });
    } catch (error) {
      this.uiService.toggleLoading();
      this.uiService.showError(error);
    }
  }

}
