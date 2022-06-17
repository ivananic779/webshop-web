import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  // Constructor
  constructor(
    private apiService: ApiService
    ) {
  }

  ngOnInit() {
    // Initialize API Service
    this.apiService.get('test', {}).subscribe(res => {
      console.log(res);
    });
  }

}
