import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/api-models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public users: Users;
  public loading: boolean;

  constructor(
    private apiService: ApiService
  ) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(res => {
      this.users = res.data;
      this.loading = false;
    });
  }

}
