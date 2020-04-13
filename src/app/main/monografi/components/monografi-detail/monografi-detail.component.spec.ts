import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonografiDetailComponent } from './monografi-detail.component';

describe('MonografiDetailComponent', () => {
  let component: MonografiDetailComponent;
  let fixture: ComponentFixture<MonografiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonografiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonografiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
