import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallsalesdataComponent } from './overallsalesdata.component';

describe('OverallsalesdataComponent', () => {
  let component: OverallsalesdataComponent;
  let fixture: ComponentFixture<OverallsalesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallsalesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallsalesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
