import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSignup } from './business-signup';

describe('BusinessSignup', () => {
  let component: BusinessSignup;
  let fixture: ComponentFixture<BusinessSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
