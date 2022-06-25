import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
    apiService: ApiService,
  ) {
    this.username = null;
    this.password = null;
    this.rememberMe = false;
  }

  ngOnInit() {
  }

  public login() {
    
  }

}
