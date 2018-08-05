import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListberitaComponent } from './listberita.component';

describe('ListberitaComponent', () => {
  let component: ListberitaComponent;
  let fixture: ComponentFixture<ListberitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListberitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListberitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
