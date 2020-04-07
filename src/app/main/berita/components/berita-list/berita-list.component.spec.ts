import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaListComponent } from './berita-list.component';

describe('BeritaListComponent', () => {
  let component: BeritaListComponent;
  let fixture: ComponentFixture<BeritaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeritaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
