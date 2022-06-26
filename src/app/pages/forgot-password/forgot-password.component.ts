import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public email: string;

  constructor() { 
    this.email = null;
  }

  ngOnInit(): void {
  }

  public resetPassword(): void {
    console.log("resetPAssword");
  }

}
