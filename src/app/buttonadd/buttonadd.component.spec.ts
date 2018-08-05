import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonaddComponent } from './buttonadd.component';

describe('ButtonaddComponent', () => {
  let component: ButtonaddComponent;
  let fixture: ComponentFixture<ButtonaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
