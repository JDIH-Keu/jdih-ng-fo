import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TematikPageComponent } from './tematik-page.component';

describe('TematikPageComponent', () => {
  let component: TematikPageComponent;
  let fixture: ComponentFixture<TematikPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TematikPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TematikPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
