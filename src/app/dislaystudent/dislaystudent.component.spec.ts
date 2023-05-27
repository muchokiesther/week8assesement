import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislaystudentComponent } from './dislaystudent.component';

describe('DislaystudentComponent', () => {
  let component: DislaystudentComponent;
  let fixture: ComponentFixture<DislaystudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DislaystudentComponent]
    });
    fixture = TestBed.createComponent(DislaystudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
