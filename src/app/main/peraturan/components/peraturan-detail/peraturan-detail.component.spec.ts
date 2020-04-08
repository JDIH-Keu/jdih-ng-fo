import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeraturanDetailComponent } from './peraturan-detail.component';

describe('PeraturanDetailComponent', () => {
  let component: PeraturanDetailComponent;
  let fixture: ComponentFixture<PeraturanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeraturanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeraturanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
