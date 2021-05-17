import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustprofileeditComponent } from './custprofileedit.component';

describe('CustprofileeditComponent', () => {
  let component: CustprofileeditComponent;
  let fixture: ComponentFixture<CustprofileeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustprofileeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
