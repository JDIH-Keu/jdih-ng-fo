import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridItemsComponent } from './grid-items.component';

describe('GridItemsComponent', () => {
  let component: GridItemsComponent;
  let fixture: ComponentFixture<GridItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
