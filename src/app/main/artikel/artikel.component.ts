import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.scss']
})
export class ArtikelComponent implements OnInit {

  showModal = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleFloatClick() {
    this.showModal = true;
  }

  search($event){
    this.router.navigate(['/artikel/list'], {
      queryParams: $event,
      fragment: 'anchor'
    });

    this.showModal = false;
  }
}
