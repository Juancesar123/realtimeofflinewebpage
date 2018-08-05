import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinputComponent } from './modalinput.component';

describe('ModalinputComponent', () => {
  let component: ModalinputComponent;
  let fixture: ComponentFixture<ModalinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
