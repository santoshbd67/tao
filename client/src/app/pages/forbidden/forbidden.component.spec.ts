import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenComponent } from './forbidden.component';

describe('LandingPageComponent', () => {
  let component: ForbiddenComponent;
  let fixture: ComponentFixture<ForbiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
