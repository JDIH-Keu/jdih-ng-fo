import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeraturanFilterComponent } from './peraturan-filter.component';

describe('PeraturanFilterComponent', () => {
  let component: PeraturanFilterComponent;
  let fixture: ComponentFixture<PeraturanFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeraturanFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeraturanFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
