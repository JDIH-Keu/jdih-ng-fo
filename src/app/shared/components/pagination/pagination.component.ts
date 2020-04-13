import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import paginate from 'jw-paginate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  styleUrls: ['./pagination.component.scss'],
  templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnInit, OnChanges {
  @Input() itemsLength: number;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 2;
  @Input() pageSize: number;
  @Input() maxPages: number;
  @Input() route: string;
  @Input() routeParams = {};

  pager: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
    // set page if items array isn't empty
    if (this.itemsLength) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    // if (changes.items.currentValue !== changes.items.previousValue) {
    //   this.setPage(this.initialPage);
    // }
  }

  createQueryParams(page: number, limit: number) {
    const params = {
      ...this.routeParams,
      limit,
      offset: (page - 1) * limit
    };
    return params;
  }

  setPage(page: number) {
    // get new pager object for specified page
    this.pager = paginate(this.itemsLength, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    const paginationEvents = { offset: this.pager.startIndex, end: this.pager.startIndex + this.pageSize, limit: this.pageSize };

    // call change page function in parent component
    this.changePage.emit(paginationEvents);
  }
}