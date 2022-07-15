import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UiService } from 'src/app/components/ui/ui.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/api-models';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {

  formGroup = this.formBuilder.group({
    username: new FormControl("", [
      Validators.required,
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    firstName: new FormControl("", []),
    lastName: new FormControl("", []),
    companyName: new FormControl("", []),
  });

  @Input() display: boolean;

  @Output() closeDialogEmitter = new EventEmitter<boolean>();

  public user: User;

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
    if (this.user.password != this.user.confirm_password) {
      this.uiService.showWarn("Lozinke se ne podudaraju.");
      return;
    }

    this.uiService.countRequestUp();

    try {
      console.log(this.user);
      this.apiService.postUser(this.user).subscribe(res => {
        if (res.status == "OK") {
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
      this.uiService.showError("Greška kod spremanja korisnika");
    }
  }

}
