import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVaryficationComponent } from './otp-varyfication.component';

describe('OtpVaryficationComponent', () => {
  let component: OtpVaryficationComponent;
  let fixture: ComponentFixture<OtpVaryficationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpVaryficationComponent]
    });
    fixture = TestBed.createComponent(OtpVaryficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
