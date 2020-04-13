import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonografiFilterComponent } from './monografi-filter.component';

describe('MonografiFilterComponent', () => {
  let component: MonografiFilterComponent;
  let fixture: ComponentFixture<MonografiFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonografiFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonografiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
