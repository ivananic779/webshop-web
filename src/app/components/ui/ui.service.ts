import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  isLoading: boolean;

  constructor() { 
    this.isLoading = false;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
