import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuilsCompteComponent } from './seuils-compte.component';

describe('SeuilsCompteComponent', () => {
  let component: SeuilsCompteComponent;
  let fixture: ComponentFixture<SeuilsCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeuilsCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeuilsCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
