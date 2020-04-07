import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TematikComponent } from './tematik.component';

describe('TematikComponent', () => {
  let component: TematikComponent;
  let fixture: ComponentFixture<TematikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TematikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TematikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
