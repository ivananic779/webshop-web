import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  count: number;

  constructor(
    private messageService: MessageService,
  ) { 
    this.count = 0;
  }

  public countRequestUp(): void {
    this.count++;
  }

  public countRequestDown(): void {
    this.count--;
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
}
