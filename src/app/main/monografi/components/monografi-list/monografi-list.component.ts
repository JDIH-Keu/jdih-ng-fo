import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monografi } from '../../../../shared/models/main/catalogs';

@Component({
  selector: 'app-monografi-list',
  templateUrl: './monografi-list.component.html',
  styleUrls: ['./monografi-list.component.scss']
})
export class MonografiListComponent implements OnInit {
  MonografiList: Monografi[];
  currentQueryParams;
  initialPage = 1;
  pageSize = 5;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.currentQueryParams = data;
      if (this.currentQueryParams.offset) {
        this.initialPage = Math.floor(this.currentQueryParams.offset / this.pageSize) + 1;
      }
      this.getData(this.currentQueryParams);
    },
      err => this.currentQueryParams = {}
    );
  }

  getData(params) {
    this.MonografiList = [{
      MonografiHukumId: '1',
      Judul: 'Monografi Pengadilan Didaftarkan oleh Pemerintah Daerah',
      NomorPanggil: '166/PXX/2019',
      TempatTerbit: 'AA',
      ISBN: 'AA',
      Penerbit: 'AA'
    }];
  }

  generateButtonDetail(item?: Monografi) {
    return {
      Text: 'Detail',
      Icon: 'fa fa-list',
      Link: '/monografi/detail'
    };
  }

  generateButton(item: Monografi) {
    if (!item) { return []; }
    return [];
  }

  onChangePage($event) {
    return false;
  }
}
