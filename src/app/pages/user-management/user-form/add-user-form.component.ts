import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UiService } from 'src/app/components/ui/ui.service';
import { Language } from 'src/app/models/api-models';
import { User } from 'src/app/models/api-models';
import { ApiService } from 'src/app/services/api.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  formGroup = this.formBuilder.group(
    {
      username: new FormControl("", [
        Validators.required,
      ]),
      email: new FormControl("", [
        Validators.required,
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirm_password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      first_name: [''],
      last_name: [''],
      company_name: [''],
      language_id: new FormControl("", [
        Validators.required
      ]),
    },
  );

  @Input() display: boolean;

  @Output() closeDialogEmitter = new EventEmitter<boolean>();

  @Input() user: User;

  public languages: SelectItem[];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private uiService: UiService,
  ) {
    this.display = false;
    this.user = new User();
    this.languages = [];
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  private getLanguages() {
    this.uiService.countRequestUp();
    try {
      this.apiService.getLanguages().subscribe(res => {
        if (res.status == "OK") {
          this.languages = Language.makeSelectItem(res.data);
          this.uiService.countRequestDown();
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

  public closeDialog(refresh: boolean): void {
    this.closeDialogEmitter.emit(refresh);
    this.formGroup.reset();
  }

  public saveChanges(): void {
    // Validator password matches
    if (this.user.password != this.user.confirm_password) {
      this.uiService.showWarn('lbl_passwords_must_match');
      return;
    }

    this.uiService.countRequestUp();

    try {
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
      this.uiService.showError(error);
    }
  }

  public deleteUser(): void {
    this.uiService.countRequestUp();

    try {
      this.apiService.deleteUser(this.user.id).subscribe(res => {
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
      this.uiService.showError(error);
    }
  }

  logme(me) {
    console.log(me);
  }

}
