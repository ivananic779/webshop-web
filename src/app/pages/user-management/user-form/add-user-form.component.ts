import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UiService } from 'src/app/components/ui/ui.service';
import { Language } from 'src/app/models/language';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
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
    this.uiService.toggleLoading();
    try {
      this.apiService.getLanguages().subscribe(res => {
        if (res.status == "OK") {
          this.languages = Language.makeSelectItem(res.data);
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

  public closeDialog(refresh: boolean): void {
    this.closeDialogEmitter.emit(refresh);
    this.formGroup.reset();
  }

  public saveChanges(): void {
    this.uiService.toggleLoading();

    try {
      this.apiService.postUser(this.user).subscribe(res => {
        if (res.status == "OK") {
          this.uiService.toggleLoading();
          this.closeDialog(true);
          this.uiService.showSuccess(res.message);
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

  public deleteUser(): void {
    this.uiService.toggleLoading();

    try {
      this.apiService.deleteUser(this.user.id).subscribe(res => {
        if (res.status == "OK") {
          this.uiService.toggleLoading();
          this.closeDialog(true);
          this.uiService.showSuccess(res.message);
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
