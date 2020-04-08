import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PustakaComponent } from './pustaka.component';

describe('PustakaComponent', () => {
  let component: PustakaComponent;
  let fixture: ComponentFixture<PustakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PustakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PustakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
