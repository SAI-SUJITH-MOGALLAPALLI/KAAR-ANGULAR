import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditdebitmemoComponent } from './creditdebitmemo.component';

describe('CreditdebitmemoComponent', () => {
  let component: CreditdebitmemoComponent;
  let fixture: ComponentFixture<CreditdebitmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditdebitmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditdebitmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
