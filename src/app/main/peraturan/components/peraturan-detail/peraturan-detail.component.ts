import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeraturanService } from 'src/app/shared/services/peraturan.service';
import { ActivatedRoute } from '@angular/router';
import { Peraturan } from 'src/app/shared/models/main/catalogs';

@Component({
  selector: 'app-peraturan-detail',
  templateUrl: './peraturan-detail.component.html',
  styleUrls: ['./peraturan-detail.component.scss']
})
export class PeraturanDetailComponent implements OnInit {
  DataPeraturan: Peraturan;

  constructor(private http: HttpClient,
              private peraturanService: PeraturanService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      setTimeout(() => {
        this.peraturanService.getById(data.id).subscribe(result => {
          this.DataPeraturan = result;
        });
      });
    });

  }
}
