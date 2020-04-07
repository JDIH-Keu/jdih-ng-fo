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

  ItemClassLargeScreen: string;
  ItemClassExtraLargeScreen: string;
  ItemClassSmallScreen: string;

  constructor() { }

  ngOnInit(): void {
    this.ItemClassLargeScreen = this.lg ? `grid-md-${this.lg}-items` : 'grid-md-3-items';
    this.ItemClassExtraLargeScreen = this.xl ? `grid-xl-${this.lg}-items` : 'grid-xl-3-items';
    this.ItemClassSmallScreen =  this.sm ? `grid-sm-${this.sm}-items` : 'grid-sm-4-items';
  }

}
