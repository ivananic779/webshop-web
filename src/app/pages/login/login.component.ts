import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/components/ui/ui.service';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public username: string;
  public password: string;
  public rememberMe: boolean;

  constructor(
    private uiService: UiService,
    private apiService: ApiService,
    private router: Router,
    private storageService: StorageService,
  ) {
    this.username = null;
    this.password = null;
    this.rememberMe = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public login(): void {
    if (!this.username || !this.password) {
      this.uiService.showWarn("Upišite korisničko ime i lozinku.");
      return;
    }

    this.uiService.countRequestUp();

    try {
      this.apiService.login(this.username, this.password).subscribe(res => {
        if (res.status == "OK") {
          this.storageService.setUserToken(this.username, res.data.token, res.data.role_name, this.rememberMe);

          this.uiService.countRequestDown();

          this.router.navigate(['/dashboard']);
        } else {
          this.uiService.countRequestDown();
          this.uiService.showError(res.message);
        }
      });
    } catch (error) {
      this.uiService.countRequestDown();
      this.uiService.showError(error);
    }
  }

}
