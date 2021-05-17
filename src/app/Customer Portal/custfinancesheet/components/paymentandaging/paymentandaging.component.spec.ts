import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentandagingComponent } from './paymentandaging.component';

describe('PaymentandagingComponent', () => {
  let component: PaymentandagingComponent;
  let fixture: ComponentFixture<PaymentandagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentandagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentandagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
