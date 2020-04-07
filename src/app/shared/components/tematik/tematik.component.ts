import { Component, OnInit, Input } from '@angular/core';
import { Tematik } from '../../models/tematik';

@Component({
  selector: 'app-tematik',
  templateUrl: './tematik.component.html',
  styleUrls: ['./tematik.component.scss']
})
export class TematikComponent implements OnInit {
  @Input() title: string;
  @Input() data: Tematik[];

  constructor() { }

  ngOnInit(): void {

  }

}
