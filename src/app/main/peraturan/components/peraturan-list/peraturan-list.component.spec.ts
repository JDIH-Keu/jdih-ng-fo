import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeraturanListComponent } from './peraturan-list.component';

describe('PeraturanListComponent', () => {
  let component: PeraturanListComponent;
  let fixture: ComponentFixture<PeraturanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeraturanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeraturanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
