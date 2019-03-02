import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAccComponent } from './manager-acc.component';

describe('ManagerAccComponent', () => {
  let component: ManagerAccComponent;
  let fixture: ComponentFixture<ManagerAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
