import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { UiService } from 'src/app/components/ui/ui.service';
import { User } from 'src/app/models/api-models';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public displayAddUserForm: boolean;
  public displayEditUserForm: boolean;

  public users: User[];
  public selectedUser: User;

  public loading: boolean;

  public globalFilter: string;

  constructor(
    private apiService: ApiService,
    private uiService: UiService,
    private helperService: HelperService,
  ) {
    this.displayAddUserForm = false;
    this.displayEditUserForm = false;
    this.users = [];
    this.loading = false;
    this.globalFilter = null;
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.uiService.countRequestUp();

    this.users = [];

    try {
      this.apiService.getUsers().subscribe(res => {
        if (res.status == "OK") {
          this.users = res.data;
          this.uiService.countRequestDown();
        } else {
          this.uiService.countRequestDown();
          this.uiService.showError(res.message);
        }
      });
    } catch (error) {
      this.users = [];
      this.uiService.countRequestDown();
      this.uiService.showError("Greška kod dohvata korisnika.");
    }
  }

  public deleteUser($user: User): void {
    this.uiService.countRequestUp();

    try {
      this.apiService.deleteUser($user.id).subscribe(res => {
        if (res.status == "OK") {
          this.uiService.countRequestDown();
          this.uiService.showSuccess(res.message);
    
          this.getData();
        } else {
          this.uiService.countRequestDown();
          this.uiService.showError(res.message);
    
          this.getData();
        }
      });
    } catch (error) {
      this.uiService.countRequestDown();
      this.uiService.showError("Greška kod brisanja korisnika.");
    
      this.getData();
    }
  }

  public toggleAddUserForm($isRefresh: boolean): void {
    this.displayAddUserForm = !this.displayAddUserForm;

    if ($isRefresh) {
      this.getData();
    }
  }

  public toggleEditUserForm($isRefresh: boolean, $selectedUser: User): void {
    if ($selectedUser != null) {
      this.selectedUser = this.helperService.deepCopy($selectedUser);
    }

    this.displayEditUserForm = !this.displayEditUserForm;

    if ($isRefresh) {
      this.getData();
    }
  }

  public toggleDeleteUserDialog($user: User): void {
    this.uiService.confirmDialog("Brisanje korisnika", "Jeste li sigurni da želite obrisati korisnika " + $user.username + "?", () => this.deleteUser($user));
  }

  public clearFilters($table: Table): void {
    this.globalFilter = null;
    $table.clear();
  }

}
