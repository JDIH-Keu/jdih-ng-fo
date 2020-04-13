import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutusanDetailComponent } from './putusan-detail.component';

describe('PutusanDetailComponent', () => {
  let component: PutusanDetailComponent;
  let fixture: ComponentFixture<PutusanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutusanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutusanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
