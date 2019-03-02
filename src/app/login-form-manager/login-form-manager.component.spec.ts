import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormManagerComponent } from './login-form-manager.component';

describe('LoginFormManagerComponent', () => {
  let component: LoginFormManagerComponent;
  let fixture: ComponentFixture<LoginFormManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
