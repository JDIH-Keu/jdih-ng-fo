import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Putusan } from '../../../../shared/models/main/catalogs';

@Component({
  selector: 'app-putusan-list',
  templateUrl: './putusan-list.component.html',
  styleUrls: ['./putusan-list.component.scss']
})
export class PutusanListComponent implements OnInit {
  PutusanList: Putusan[];
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
    this.PutusanList = [{
      PutusanPengadilanId: '1',
      Judul: 'Putusan Pengadilan Didaftarkan oleh Pemerintah Daerah',
      Nomor: '166/PXX/2019',
      Tahun: '2019',
      FullTextPDF: ''
    }];
  }

  generateButtonDetail(item?: Putusan) {
    return {
      Text: 'Detail',
      Icon: 'fa fa-list',
      Link: '/Putusan/detail'
    };
  }

  generateButton(item: Putusan) {
    if (!item) { return []; }
    return [
      {
        Text: 'Fulltext',
        Link: item.FullTextPDF,
        Icon: 'fa fa-file-pdf-o',
      }
    ];
  }

  onChangePage($event) {
    return false;
  }
}
