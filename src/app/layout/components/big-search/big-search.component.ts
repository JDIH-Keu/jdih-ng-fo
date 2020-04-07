import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-search',
  templateUrl: './big-search.component.html',
  styleUrls: ['./big-search.component.scss']
})
export class BigSearchComponent implements OnInit {
  showAdvancedSearch: boolean;

  selectedSimpleItem = 'Two';
  simpleItems = [];

  constructor() { }

  ngOnInit(): void {
    this.simpleItems = ['One', 'Two', 'Three'];
  }


}
