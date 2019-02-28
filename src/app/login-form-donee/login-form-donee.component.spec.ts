import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormDoneeComponent } from './login-form-donee.component';

describe('LoginFormDoneeComponent', () => {
  let component: LoginFormDoneeComponent;
  let fixture: ComponentFixture<LoginFormDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
