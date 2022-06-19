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

  @Input() user: User;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private uiService: UiService,
  ) {
    this.display = false;
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

    // should be dropdown
    this.user.language_id = 1;

    try {
      this.apiService.postUser(this.user).subscribe(res => {
        if (res.status == "OK") {
          this.uiService.toggleLoading();
          this.uiService.showSuccess(res.message);
          this.closeDialog(true);
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

  logme(me) {
    console.log(me);
  }

}
