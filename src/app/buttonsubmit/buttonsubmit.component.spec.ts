import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsubmitComponent } from './buttonsubmit.component';

describe('ButtonsubmitComponent', () => {
  let component: ButtonsubmitComponent;
  let fixture: ComponentFixture<ButtonsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
