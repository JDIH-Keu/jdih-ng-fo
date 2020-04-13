import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelDetailComponent } from './artikel-detail.component';

describe('ArtikelDetailComponent', () => {
  let component: ArtikelDetailComponent;
  let fixture: ComponentFixture<ArtikelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
