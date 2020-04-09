import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peraturan',
  templateUrl: './peraturan.component.html',
  styleUrls: ['./peraturan.component.scss']
})
export class PeraturanComponent implements OnInit {
  showModal = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleFloatClick() {
    this.showModal = true;
  }

  search($event){
    this.router.navigate(['/peraturan/list'], {
      queryParams: $event,
      fragment: 'anchor'
    });

    this.showModal = false;
  }

}
