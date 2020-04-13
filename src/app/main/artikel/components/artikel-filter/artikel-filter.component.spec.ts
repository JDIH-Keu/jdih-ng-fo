import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelFilterComponent } from './artikel-filter.component';

describe('ArtikelFilterComponent', () => {
  let component: ArtikelFilterComponent;
  let fixture: ComponentFixture<ArtikelFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
