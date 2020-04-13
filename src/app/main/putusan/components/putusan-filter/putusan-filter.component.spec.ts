import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutusanFilterComponent } from './putusan-filter.component';

describe('PutusanFilterComponent', () => {
  let component: PutusanFilterComponent;
  let fixture: ComponentFixture<PutusanFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutusanFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutusanFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
