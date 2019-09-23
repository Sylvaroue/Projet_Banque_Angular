import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesUserComponent } from './comptes-user.component';

describe('ComptesUserComponent', () => {
  let component: ComptesUserComponent;
  let fixture: ComponentFixture<ComptesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
