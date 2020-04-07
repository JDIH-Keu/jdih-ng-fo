import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaDetailComponent } from './berita-detail.component';

describe('BeritaDetailComponent', () => {
  let component: BeritaDetailComponent;
  let fixture: ComponentFixture<BeritaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeritaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
