import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLogin } from './business-login';

describe('BusinessLogin', () => {
  let component: BusinessLogin;
  let fixture: ComponentFixture<BusinessLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
