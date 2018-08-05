import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormregisterComponent } from './formregister.component';

describe('FormregisterComponent', () => {
  let component: FormregisterComponent;
  let fixture: ComponentFixture<FormregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
