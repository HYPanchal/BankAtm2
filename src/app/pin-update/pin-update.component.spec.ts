import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinUpdateComponent } from './pin-update.component';

describe('PinUpdateComponent', () => {
  let component: PinUpdateComponent;
  let fixture: ComponentFixture<PinUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinUpdateComponent]
    });
    fixture = TestBed.createComponent(PinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
