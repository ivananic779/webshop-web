import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/components/ui/ui.service';
import { User, Users } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public displayUserForm: boolean;
  
  public users: Users;
  public selectedUser: User;

  public loading: boolean;


  constructor(
    private apiService: ApiService,
    private uiService: UiService,
  ) {
    this.displayUserForm = false;
    this.users = null;
    this.selectedUser = new User();
    this.loading = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.uiService.toggleLoading();

    this.users = null;

    try {
        this.apiService.getUsers().subscribe(res => {
          if (res.status == "OK") {
            this.users = res.data;
            this.uiService.toggleLoading();
            this.uiService.showSuccess(res.message);
          } else {
            this.uiService.toggleLoading();
            this.uiService.showError(res.message);
          }
      });
    } catch (error) {
      this.users = null;
      this.uiService.toggleLoading();
      this.uiService.showError(error);
    }
  }

  public toggleUserForm(isRefresh: boolean, selectedUser: User = null): void {
    if (selectedUser != null) {
      // Deep copy of the selected user
      this.selectedUser = JSON.parse(JSON.stringify(selectedUser));
    }

    // If data needs to be refreshed
    if (isRefresh) {
      this.getData();
    }

    this.displayUserForm = !this.displayUserForm;
  }

}
