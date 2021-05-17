import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdatauploadComponent } from './masterdataupload.component';

describe('MasterdatauploadComponent', () => {
  let component: MasterdatauploadComponent;
  let fixture: ComponentFixture<MasterdatauploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdatauploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdatauploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
