import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artikel } from '../../../../shared/models/main/catalogs';

@Component({
  selector: 'app-artikel-list',
  templateUrl: './artikel-list.component.html',
  styleUrls: ['./artikel-list.component.scss']
})
export class ArtikelListComponent implements OnInit {
  ArtikelList: Artikel[];
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
    this.ArtikelList = [{
      ArtikelId: '1',
      Judul: 'Artikel Pengadilan Didaftarkan oleh Pemerintah Daerah',
      EdisiCetakan: '166/PXX/2019',
      TempatTerbit: 'AA',
      Sumber: 'AA',
      Penerbit: 'AA'
    }];
  }

  generateButtonDetail(item?: Artikel) {
    return {
      Text: 'Detail',
      Icon: 'fa fa-list',
      Link: '/artikel/detail'
    };
  }

  generateButton(item: Artikel) {
    if (!item) { return []; }
    return [];
  }

  onChangePage($event) {
    return false;
  }
}
