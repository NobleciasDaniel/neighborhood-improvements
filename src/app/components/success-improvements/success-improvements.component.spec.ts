import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessImprovementsComponent } from './success-improvements.component';

describe('SuccessImprovementsComponent', () => {
  let component: SuccessImprovementsComponent;
  let fixture: ComponentFixture<SuccessImprovementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessImprovementsComponent]
    });
    fixture = TestBed.createComponent(SuccessImprovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
