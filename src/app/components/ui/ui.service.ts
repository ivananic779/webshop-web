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

  public showSuccess() {
    this.messageService.add({ severity: 'success', summary: '', detail: 'Message Content' });
  }

  public showInfo() {
    this.messageService.add({ severity: 'info', summary: '', detail: 'Message Content' });
  }

  public showWarn() {
    this.messageService.add({ severity: 'warn', summary: '', detail: 'Message Content' });
  }

  public showError() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'Message Content' });
  }
}
