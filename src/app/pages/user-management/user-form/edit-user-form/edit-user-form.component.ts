import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UiService } from 'src/app/components/ui/ui.service';
import { ApiService } from 'src/app/services/api.service';
import { SelectItem } from 'primeng/api';
import { USER_TYPES } from 'src/app/variables/user-types';
import { User } from 'src/app/models/api-models';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent implements OnInit {

  formGroup = this.formBuilder.group({
    username: new FormControl("", [
      Validators.required,
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    typeId: new FormControl("", [
      Validators.required,
    ]),
    firstName: new FormControl("", []),
    lastName: new FormControl("", []),
    companyName: new FormControl("", []),
  });

  formGroupPassword = this.formBuilder.group({
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  @Input() display: boolean;

  public displayChangePassword: boolean;

  @Input() user: User;

  @Output() closeDialogEmitter = new EventEmitter<boolean>();

  public userTypes: SelectItem[];

  public password: string;
  public confirmPassword: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private uiService: UiService,
  ) {
    this.display = false;
    this.displayChangePassword = false,
    this.userTypes = USER_TYPES;
  }

  ngOnInit(): void {
  }

  public closeDialog(refresh: boolean): void {
    this.closeDialogEmitter.emit(refresh);
    this.formGroup.reset();
  }

  public toggleChangePasswordDialog(): void {
    this.displayChangePassword = !this.displayChangePassword;
  }

  public changePassword(): void {
    if (this.password != this.confirmPassword) {
      this.uiService.showWarn("Lozinke se ne podudaraju.");
      return;
    }

    this.uiService.countRequestUp();

    try {
      this.apiService.changeUserPassword(this.user.id, this.password, this.confirmPassword).subscribe(res => {
        if (res.message == "OK") {
          this.uiService.countRequestDown();
          this.toggleChangePasswordDialog();
          this.uiService.showSuccess(res.message);
        } else {
          this.uiService.countRequestDown();
          this.uiService.showError(res.message);
        }
      });
    } catch (error) {
      this.uiService.countRequestDown();
      this.uiService.showError("Greška kod promjene lozinke");
    }
  }

  public saveChanges(): void {

    this.uiService.countRequestUp();

    try {
      this.apiService.editUser(this.user).subscribe(res => {
        if (res.message == "OK") {
          this.uiService.countRequestDown();
          this.closeDialog(true);
          this.uiService.showSuccess(res.message);
        } else {
          this.uiService.countRequestDown();
          this.uiService.showError(res.message);
        }
      });
    } catch (error) {
      this.uiService.countRequestDown();
      this.uiService.showError("Greška kod spremanja izmjena");
    }
  }

}
