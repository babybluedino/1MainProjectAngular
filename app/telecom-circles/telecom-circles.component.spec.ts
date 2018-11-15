import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomCirclesComponent } from './telecom-circles.component';

describe('TelecomCirclesComponent', () => {
  let component: TelecomCirclesComponent;
  let fixture: ComponentFixture<TelecomCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
