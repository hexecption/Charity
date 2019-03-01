import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeAccComponent } from './donee-acc.component';

describe('DoneeAccComponent', () => {
  let component: DoneeAccComponent;
  let fixture: ComponentFixture<DoneeAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
