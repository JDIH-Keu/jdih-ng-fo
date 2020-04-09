import { Component, OnInit } from '@angular/core';
import { Peraturan } from '../../shared/models/catalogs';
import { Tematik } from '../../shared/models/tematik';
import { PeraturanService } from '../../shared/services/peraturan.service';
import { TematikService } from '../../shared/services/tematik.service';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-tematik-page',
  templateUrl: './tematik-page.component.html',
  styleUrls: ['./tematik-page.component.scss']
})
export class TematikPageComponent implements OnInit {
  JudulTematik = '';
  PeraturanList: Peraturan[];
  PeraturanListFiltered: Peraturan[];
  TematikData: Tematik[];
  FilterData: any;
  objectKeys = Object.keys;

  MapPeraturan = Object.assign({
    0: 'UUD',
    1: 'UU',
    2: 'PERPU',
    3: 'PP',
    4: 'PERPRES',
    5: 'KEPRES',
    6: 'INPRES',
    7: 'PMK',
  });

  constructor(private peraturanService: PeraturanService, private tematikService: TematikService) { }

  ngOnInit(): void {
    // Get Tematik Data
    this.tematikService.getAll().subscribe(result => {
      this.TematikData = result;
    },
      err => {
        this.tematikService.getDefault().subscribe(result => {
          this.TematikData = result;
        });
      }
    );

    // Get Peraturan by Subject
    this.peraturanService.getAll().subscribe(result => {
      this.PeraturanList = result;
    },
      err => {
        this.peraturanService.getExample().subscribe(result => {
          this.PeraturanList = result;
          this.PeraturanListFiltered = result;
          this.FilterData = this.getBentukData(this.PeraturanList, 'RefTypeId');
        });
      }
    );
  }

  filterPeraturan(idType) {
    if (idType === -1) {
      this.PeraturanListFiltered = this.PeraturanList;
    } else {
      this.PeraturanListFiltered = this.PeraturanList.filter(x => x.RefTypeId === idType);
    }
  }

  getBentukData(data, field) {
    const group = { semua: { Id: -1, count: 0 } };

    data.forEach(element => {
      const name = this.MapPeraturan[element[field]];

      if (!group[name]) {
        group[name] = { count: 1, Id: element[field] };
      } else {
        group[name].count += 1;
      }
      group.semua.count += 1;
    });

    console.log(this.objectKeys(group));

    return group;
  }

}
