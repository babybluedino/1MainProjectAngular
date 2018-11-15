import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsUpdateComponent } from './agents-update.component';

describe('AgentsUpdateComponent', () => {
  let component: AgentsUpdateComponent;
  let fixture: ComponentFixture<AgentsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
