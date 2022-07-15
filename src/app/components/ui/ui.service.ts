import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UiComponent } from './ui.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public requestCount: number;

  // We are setting this in the uicomponent as uiService.uiComponent = this;
  public uiComponent: UiComponent;

  constructor(
    private messageService: MessageService,
  ) { 
    this.requestCount = 0;
  }

  countRequestUp() {
    this.requestCount++;
  }

  countRequestDown() {
    this.requestCount--;
  }

  public showSuccess(msg: string): void {
    this.messageService.add({ severity: 'success', summary: '', detail: msg });
  }

  public showInfo(msg: string): void {
    this.messageService.add({ severity: 'info', summary: '', detail: msg });
  }

  public showWarn(msg: string): void {
    this.messageService.add({ severity: 'warn', summary: '', detail: msg });
  }

  public showError(msg: string): void {
    this.messageService.add({ severity: 'error', summary: '', detail: msg });
  }

  public confirmDialog(header: string, message: string, accept: () => void): void {
    this.uiComponent.confirmationService.confirm({
      header: header,
      message: message,
      accept: () => {
        accept();
      }
    });
  }
}
