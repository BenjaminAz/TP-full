import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBicicletaComponent } from './edit-bicicleta.component';

describe('EditBicicletaComponent', () => {
  let component: EditBicicletaComponent;
  let fixture: ComponentFixture<EditBicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
