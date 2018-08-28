import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritadetailComponent } from './beritadetail.component';

describe('BeritadetailComponent', () => {
  let component: BeritadetailComponent;
  let fixture: ComponentFixture<BeritadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeritadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
