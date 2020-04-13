import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PutusanService } from 'src/app/shared/services/putusan.service';
import { ActivatedRoute } from '@angular/router';
import { Putusan } from 'src/app/shared/models/main/catalogs';

@Component({
  selector: 'app-putusan-detail',
  templateUrl: './putusan-detail.component.html',
  styleUrls: ['./putusan-detail.component.scss']
})
export class PutusanDetailComponent implements OnInit {
  DataPutusan: Putusan;

  constructor(private http: HttpClient,
              private putusanService: PutusanService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      setTimeout(() => {
        this.putusanService.getById(data.id).subscribe(result => {
          this.DataPutusan = result;
        });
      });
    });

  }
}
