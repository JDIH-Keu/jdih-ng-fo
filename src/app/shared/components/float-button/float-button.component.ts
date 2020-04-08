import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter();
  @Input() icon = 'fa fa-search';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick($event) {
    this.buttonClicked.emit($event);
  }

}
