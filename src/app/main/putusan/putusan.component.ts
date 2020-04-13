import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-putusan',
  templateUrl: './putusan.component.html',
  styleUrls: ['./putusan.component.scss']
})
export class PutusanComponent implements OnInit {

  showModal = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleFloatClick() {
    this.showModal = true;
  }

  search($event){
    this.router.navigate(['/putusan/list'], {
      queryParams: $event,
      fragment: 'anchor'
    });

    this.showModal = false;
  }
}
