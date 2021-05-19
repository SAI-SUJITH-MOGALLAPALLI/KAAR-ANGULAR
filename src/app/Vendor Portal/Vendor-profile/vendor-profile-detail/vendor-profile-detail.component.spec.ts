import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfileDetailComponent } from './vendor-profile-detail.component';

describe('VendorProfileDetailComponent', () => {
  let component: VendorProfileDetailComponent;
  let fixture: ComponentFixture<VendorProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorProfileDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
