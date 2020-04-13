import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutusanListComponent } from './putusan-list.component';

describe('PutusanListComponent', () => {
  let component: PutusanListComponent;
  let fixture: ComponentFixture<PutusanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutusanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutusanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
