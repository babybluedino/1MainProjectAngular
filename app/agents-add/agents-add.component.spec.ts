import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsAddComponent } from './agents-add.component';

describe('AgentsAddComponent', () => {
  let component: AgentsAddComponent;
  let fixture: ComponentFixture<AgentsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
