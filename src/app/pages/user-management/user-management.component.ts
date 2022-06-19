import { Component, OnInit } from '@angular/core';
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
    private apiService: ApiService
  ) {
    this.loading = true;
    this.displayUserForm = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.loading = true;
    this.users = null;
    this.apiService.getUsers().subscribe(res => {
      this.users = res.data;
      this.loading = false;
    });
  }

  public toggleUserForm(event): void {
    if (event == true) {
      this.getData();
    }

    this.displayUserForm = !this.displayUserForm;
  }

}
