import { Component, OnInit } from '@angular/core';
import { Peraturan } from '../../shared/models/main/catalogs';
import { Tematik } from '../../shared/models/tematik';
import { PeraturanService } from '../../shared/services/peraturan.service';
import { TematikService } from '../../shared/services/tematik.service';
import { HeaderService } from '../../shared/services/header.service';
import { BentukPUUService } from 'src/app/shared/services/bentuk-puu.service';
import { RefBentuk } from 'src/app/shared/models/main/references';


@Component({
  selector: 'app-tematik-page',
  templateUrl: './tematik-page.component.html',
  styleUrls: ['./tematik-page.component.scss']
})
export class TematikPageComponent implements OnInit {
  JudulTematik = 'Contoh Tema';
  PeraturanList: Peraturan[];
  BentukPeraturanList: RefBentuk[];
  PeraturanListFiltered: Peraturan[];
  TematikData: Tematik[];
  FilterData: any;
  objectKeys = Object.keys;

  constructor(private peraturanService: PeraturanService,
              private tematikService: TematikService,
              private headerService: HeaderService,
              private bentukPUUService: BentukPUUService) { }

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

    this.bentukPUUService.getAll().subscribe(result => {
      this.BentukPeraturanList = result;
    },
      err => {
        this.bentukPUUService.getDefault().subscribe(result => {
          this.BentukPeraturanList = result;
        });
      }
    );

    this.headerService.updateImage('gantigambar.jpg');

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
      const name = this.BentukPeraturanList.find(bentuk => bentuk.RefTypeId === element[field]);

      console.log(name);

      if (!group[name.RefTypeNames]) {
        group[name.RefTypeNames] = { count: 1, Id: element[field] };
      } else {
        group[name.RefTypeNames].count += 1;
      }
      group.semua.count += 1;
    });

    return group;
  }

}
