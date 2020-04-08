import { Component, OnInit, Input } from '@angular/core';

class IButtonData{
  Text: string;
  Link: string;
  Icon: string;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() title = 'Judul Peraturan';
  @Input() description = 'Deskripsi Peraturan';
  @Input() buttonData: IButtonData[];
  @Input() detailButton: IButtonData;
  @Input() ribbonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
