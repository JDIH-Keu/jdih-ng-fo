import { Component, OnInit } from '@angular/core';
import { PeraturanService } from '../../shared/services/peraturan.service';

@Component({
  selector: 'app-peraturan',
  templateUrl: './peraturan.component.html',
  styleUrls: ['./peraturan.component.scss']
})
export class PeraturanComponent implements OnInit {

  constructor(private peraturanService: PeraturanService) { }

  ngOnInit(): void {
  }

}
