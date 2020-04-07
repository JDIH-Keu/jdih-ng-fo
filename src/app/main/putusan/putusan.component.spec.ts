import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutusanComponent } from './putusan.component';

describe('PutusanComponent', () => {
  let component: PutusanComponent;
  let fixture: ComponentFixture<PutusanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutusanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
