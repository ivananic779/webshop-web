import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  isLoading: boolean;

  constructor(
    private messageService: MessageService,
  ) { 
    this.isLoading = false;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  public showSuccess(msg) {
    this.messageService.add({ severity: 'success', summary: '', detail: msg });
  }

  public showInfo(msg) {
    this.messageService.add({ severity: 'info', summary: '', detail: msg });
  }

  public showWarn(msg) {
    this.messageService.add({ severity: 'warn', summary: '', detail: msg });
  }

  public showError(msg) {
    this.messageService.add({ severity: 'error', summary: '', detail: msg });
  }
}
