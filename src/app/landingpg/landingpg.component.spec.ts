import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpgComponent } from './landingpg.component';

describe('LandingpgComponent', () => {
  let component: LandingpgComponent;
  let fixture: ComponentFixture<LandingpgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandingpgComponent]
    });
    fixture = TestBed.createComponent(LandingpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
