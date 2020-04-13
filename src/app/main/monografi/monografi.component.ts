import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monografi',
  templateUrl: './monografi.component.html',
  styleUrls: ['./monografi.component.scss']
})
export class MonografiComponent implements OnInit {

  showModal = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleFloatClick() {
    this.showModal = true;
  }

  search($event){
    this.router.navigate(['/monografi/list'], {
      queryParams: $event,
      fragment: 'anchor'
    });

    this.showModal = false;
  }
}
