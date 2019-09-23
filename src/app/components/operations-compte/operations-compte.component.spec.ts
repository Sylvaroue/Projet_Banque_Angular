import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsCompteComponent } from './operations-compte.component';

describe('OperationsCompteComponent', () => {
  let component: OperationsCompteComponent;
  let fixture: ComponentFixture<OperationsCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
