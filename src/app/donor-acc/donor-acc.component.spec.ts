import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorAccComponent } from './donor-acc.component';

describe('DonorAccComponent', () => {
  let component: DonorAccComponent;
  let fixture: ComponentFixture<DonorAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
