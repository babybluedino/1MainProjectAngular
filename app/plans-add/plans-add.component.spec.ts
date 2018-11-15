import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAddComponent } from './plans-add.component';

describe('PlansAddComponent', () => {
  let component: PlansAddComponent;
  let fixture: ComponentFixture<PlansAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
