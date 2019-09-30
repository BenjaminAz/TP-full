import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNewsComponent } from './dropdown-news.component';

describe('DropdownNewsComponent', () => {
  let component: DropdownNewsComponent;
  let fixture: ComponentFixture<DropdownNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
