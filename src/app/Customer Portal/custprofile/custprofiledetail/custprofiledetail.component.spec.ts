import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustprofiledetailComponent } from './custprofiledetail.component';

describe('CustprofiledetailComponent', () => {
  let component: CustprofiledetailComponent;
  let fixture: ComponentFixture<CustprofiledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustprofiledetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustprofiledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
