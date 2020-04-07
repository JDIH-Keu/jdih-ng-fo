import { Component, OnInit } from '@angular/core';
import { PeraturanService } from '../../shared/services/peraturan.service';
import { TematikService } from '../../shared/services/tematik.service';
import { Tematik } from '../../shared/models/tematik';
import { Peraturan } from '../../shared/models/peraturan';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  TematikData: Tematik[];
  PeraturanTerbaru: Peraturan[];
  PeraturanPopuler: Peraturan[];

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

    // Get Peraturan Populer
    this.peraturanService.getAll().subscribe(result => {
      this.PeraturanTerbaru = result;
    },
      err => {
        this.peraturanService.getExample().subscribe(result => {
          this.PeraturanTerbaru = result;
        });
      }
    );


    // Get Peraturan Populer
    this.peraturanService.getAll().subscribe(result => {
      this.PeraturanPopuler = result;
    },
      err => {
        this.peraturanService.getExample().subscribe(result => {
          this.PeraturanPopuler = result;
        });
      }
    );
  }

}
