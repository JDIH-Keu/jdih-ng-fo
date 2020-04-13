import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtikelHukumService } from 'src/app/shared/services/artikel-hukum.service';
import { ActivatedRoute } from '@angular/router';
import { Artikel } from 'src/app/shared/models/main/catalogs';

@Component({
  selector: 'app-artikel-detail',
  templateUrl: './artikel-detail.component.html',
  styleUrls: ['./artikel-detail.component.scss']
})
export class ArtikelDetailComponent implements OnInit {
  DataArtikel: Artikel;

  constructor(private http: HttpClient,
              private artikelHukumService: ArtikelHukumService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      setTimeout(() => {
        this.artikelHukumService.getById(data.id).subscribe(result => {
          this.DataArtikel = result;
        });
      });
    });

  }
}
