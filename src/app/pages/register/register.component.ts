import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public username: string;
  public email: string;
  public password: string;
  public confirm_password: string;

  constructor() { }

  ngOnInit() {
    this.username = null;
    this.email = null;
    this.password = null;
    this.confirm_password = null;
  }

}
