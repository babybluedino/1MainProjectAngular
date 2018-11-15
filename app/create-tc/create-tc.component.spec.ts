import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTcComponent } from './create-tc.component';

describe('CreateTcComponent', () => {
  let component: CreateTcComponent;
  let fixture: ComponentFixture<CreateTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
