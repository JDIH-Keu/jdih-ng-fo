import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonografiListComponent } from './monografi-list.component';

describe('MonografiListComponent', () => {
  let component: MonografiListComponent;
  let fixture: ComponentFixture<MonografiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonografiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonografiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
