import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdministrationComponent } from './products-administration.component';

describe('ProductsAdministrationComponent', () => {
  let component: ProductsAdministrationComponent;
  let fixture: ComponentFixture<ProductsAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
