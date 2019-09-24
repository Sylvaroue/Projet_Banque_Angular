import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeuilComponent } from './edit-seuil.component';

describe('EditSeuilComponent', () => {
  let component: EditSeuilComponent;
  let fixture: ComponentFixture<EditSeuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
