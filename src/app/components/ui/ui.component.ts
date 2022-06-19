import { Component, OnInit } from '@angular/core';
import { UiService } from './ui.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  providers: [UiService]
})
export class UiComponent implements OnInit {

  constructor(
    public uiService: UiService,
  ) { }

  ngOnInit(): void {
  }

}
