import { Component, OnInit } from '@angular/core';
import { Peraturan } from '../../../../shared/models/main/catalogs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peraturan-list',
  templateUrl: './peraturan-list.component.html',
  styleUrls: ['./peraturan-list.component.scss']
})
export class PeraturanListComponent implements OnInit {
  PeraturanList: Peraturan[];
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
    this.PeraturanList = [{
      PeraturanId: '1',
      Judul: 'Dana Alokasi Umum Tambahan Bantuan Pembayaran Selisih Perubahan luran Jaminan Kesehatan Penduduk yang Didaftarkan oleh Pemerintah Daerah',
      Nomor: '166/PMK.07/2019',
      Tahun: '2019',
      FullTextPDF: '',
      AbstrakPDF: ''
    },
    {
      PeraturanId: '1',
      Judul: 'Dana Alokasi Umum Tambahan Bantuan Pembayaran Selisih Perubahan luran Jaminan Kesehatan Penduduk yang Didaftarkan oleh Pemerintah Daerah',
      Nomor: '166/PMK.07/2019',
      Tahun: '2019',
      FullTextPDF: '',
      AbstrakPDF: ''
    },
    {
      PeraturanId: '1',
      Judul: 'Dana Alokasi Umum Tambahan Bantuan Pembayaran Selisih Perubahan luran Jaminan Kesehatan Penduduk yang Didaftarkan oleh Pemerintah Daerah',
      Nomor: '166/PMK.07/2019',
      Tahun: '2019',
      FullTextPDF: '',
      AbstrakPDF: ''
    },
    {
      PeraturanId: '1',
      Judul: 'Dana Alokasi Umum Tambahan Bantuan Pembayaran Selisih Perubahan luran Jaminan Kesehatan Penduduk yang Didaftarkan oleh Pemerintah Daerah',
      Nomor: '166/PMK.07/2019',
      Tahun: '2019',
      FullTextPDF: '',
      AbstrakPDF: ''
    }];
  }

  generateButtonDetail(item?: Peraturan) {
    return {
      Text: 'Detail',
      Icon: 'fa fa-list',
      Link: '/peraturan/detail'
    };
  }

  generateButton(item: Peraturan) {
    if (!item) { return []; }
    return [
      {
        Text: 'Fulltext',
        Link: item.FullTextPDF,
        Icon: 'fa fa-file-pdf-o',
      },
      {
        Text: 'Abstrak',
        Link: item.AbstrakPDF,
        Icon: 'fa fa-eye',
      },
      {
        Text: 'Siaran Pers',
        Link: item.SiaranPers,
        Icon: 'fa fa-newspaper-o',
      }
    ];
  }

  onChangePage($event) {
    return false;
  }

}


