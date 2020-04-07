import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonografiComponent } from './monografi.component';

describe('MonografiComponent', () => {
  let component: MonografiComponent;
  let fixture: ComponentFixture<MonografiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonografiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonografiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
