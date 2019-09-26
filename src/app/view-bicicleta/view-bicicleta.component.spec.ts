import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBicicletaComponent } from './view-bicicleta.component';

describe('ViewBicicletaComponent', () => {
  let component: ViewBicicletaComponent;
  let fixture: ComponentFixture<ViewBicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
