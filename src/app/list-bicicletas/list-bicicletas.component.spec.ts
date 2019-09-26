import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBicicletasComponent } from './list-bicicletas.component';

describe('ListBicicletasComponent', () => {
  let component: ListBicicletasComponent;
  let fixture: ComponentFixture<ListBicicletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBicicletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBicicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
