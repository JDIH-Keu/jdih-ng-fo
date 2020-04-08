import { Component, OnInit } from '@angular/core';
import { Peraturan } from '../../../../shared/models/catalogs';

@Component({
  selector: 'app-peraturan-list',
  templateUrl: './peraturan-list.component.html',
  styleUrls: ['./peraturan-list.component.scss']
})
export class PeraturanListComponent implements OnInit {
  PeraturanList: Peraturan[];

  constructor() { }

  ngOnInit(): void {
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
      Link: '/peraturan/detail'};
  }

  generateButton(item: Peraturan) {
    if (!item) { return []; }
    return [
      {
        Text: 'Fulltext',
        Link: item.FullTextPDF,
        Icon: 'fa file-pdf-o',
      },
      {
        Text: 'Abstrak',
        Link: item.AbstrakPDF,
        Icon: 'fa file-pdf-o',
      },
      {
        Text: 'Siaran Pers',
        Link: item.SiaranPers,
        Icon: 'fa file-newspaper',
      }
    ];
  }

}
