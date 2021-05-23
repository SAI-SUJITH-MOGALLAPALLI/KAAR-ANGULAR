import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardvendorComponent } from './dashboardvendor.component';

describe('DashboardvendorComponent', () => {
  let component: DashboardvendorComponent;
  let fixture: ComponentFixture<DashboardvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardvendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
