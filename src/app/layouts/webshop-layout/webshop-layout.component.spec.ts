import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopLayoutComponent } from './webshop-layout.component';

describe('WebshopLayoutComponent', () => {
  let component: WebshopLayoutComponent;
  let fixture: ComponentFixture<WebshopLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
