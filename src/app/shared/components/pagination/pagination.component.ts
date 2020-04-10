import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import paginate from 'jw-paginate';

@Component({
  selector: 'app-pagination',
  styleUrls: ['./pagination.component.scss'],
  templateUrl:  './pagination.component.html'
})

export class PaginationComponent implements OnInit, OnChanges {
  @Input() itemsLength: number;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage: number;
  @Input() pageSize: number;
  @Input() maxPages: number;

  pager: any = {};

  ngOnInit() {
    // set page if items array isn't empty
    if (this.itemsLength) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  setPage(page: number) {
    // get new pager object for specified page
    this.pager = paginate(this.itemsLength, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    const paginationEvents = {offset: this.pager.startIndex, end: this.pager.startIndex + this.pageSize, limit: this.pageSize};

    // call change page function in parent component
    this.changePage.emit(paginationEvents);
  }
}