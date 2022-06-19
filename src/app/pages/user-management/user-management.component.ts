import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/components/ui/ui.service';
import { Users } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public displayUserForm: boolean;
  
  public users: Users;
  public loading: boolean;

  constructor(
    private apiService: ApiService,
    private uiService: UiService,
  ) {
    this.displayUserForm = false;
    this.loading = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.uiService.toggleLoading();

    this.users = null;
    this.apiService.getUsers().subscribe(res => {
      this.users = res.data;
      this.uiService.toggleLoading();
    });
  }

  public toggleUserForm(event): void {
    if (event == true) {
      this.getData();
    }

    this.displayUserForm = !this.displayUserForm;
  }

}
