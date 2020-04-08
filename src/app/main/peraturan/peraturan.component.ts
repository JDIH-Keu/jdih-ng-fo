import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peraturan',
  templateUrl: './peraturan.component.html',
  styleUrls: ['./peraturan.component.scss']
})
export class PeraturanComponent implements OnInit {
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleFloatClick() {
    this.showModal = true;
  }

  search(){
    console.log('search begin');
    this.showModal = false;
  }

}
