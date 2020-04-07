import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-items',
  templateUrl: './grid-items.component.html',
  styleUrls: ['./grid-items.component.scss']
})
export class GridItemsComponent implements OnInit {
  @Input() title: string;
  @Input() data: any[];
  @Input() lg: number;
  @Input() xl: number;
  @Input() sm: number;
  @Input() md: number;

  ItemClassLargeScreen: string;
  ItemClassExtraLargeScreen: string;
  ItemClassSmallScreen: string;
  ItemClassMediumScreen: string;

  constructor() { }

  ngOnInit(): void {
    this.ItemClassMediumScreen = this.md ? `grid-md-${this.md}-items` : 'grid-md-3-items';
    this.ItemClassLargeScreen = this.lg ? `grid-lg-${this.lg}-items` : 'grid-lg-2-items';
    this.ItemClassExtraLargeScreen = this.xl ? `grid-xl-${this.lg}-items` : 'grid-xl-3-items';
    this.ItemClassSmallScreen =  this.sm ? `grid-sm-${this.sm}-items` : 'grid-sm-1-items';
  }

}
