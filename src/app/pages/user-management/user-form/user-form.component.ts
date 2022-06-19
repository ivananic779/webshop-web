import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UiService } from 'src/app/components/ui/ui.service';
import { User } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  formGroup = this.formBuilder.group({
    username: [
      '',
      Validators.required,
    ],
    email: [
      '',
      Validators.required,
    ],
    password: [
      '',
      Validators.required,
    ],
    confirm_password: [
      '',
      Validators.required,
    ],
    first_name: [''],
    last_name: [''],
    company_name: [''],
    language_id: [
      '',
      Validators.required
    ],
  });

  @Input() display: boolean;

  @Output() closeDialogEmitter = new EventEmitter<boolean>();

  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private uiService: UiService,
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  public closeDialog(refresh: boolean): void {
    this.closeDialogEmitter.emit(refresh);
    this.formGroup.reset();
  }

  public saveChanges(): void {
    this.uiService.toggleLoading();

    this.user.username = this.formGroup.get('username').value;
    this.user.email = this.formGroup.get('email').value;
    this.user.password = this.formGroup.get('password').value;
    this.user.first_name = this.formGroup.get('first_name').value;
    this.user.last_name = this.formGroup.get('last_name').value;
    this.user.company_name = this.formGroup.get('company_name').value;
    //this.user.language_id = this.formGroup.get('language_id').value;
    this.user.language_id = 1;

    this.apiService.postUser(this.user).subscribe(res => {
      this.closeDialog(true);
    });
    
    this.uiService.toggleLoading();
  }

  logme(me) {
    console.log(me);
  }

}
