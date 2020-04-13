import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonografiHukumService } from 'src/app/shared/services/monografi-hukum.service';
import { ActivatedRoute } from '@angular/router';
import { Monografi } from 'src/app/shared/models/main/catalogs';

@Component({
  selector: 'app-monografi-detail',
  templateUrl: './monografi-detail.component.html',
  styleUrls: ['./monografi-detail.component.scss']
})
export class MonografiDetailComponent implements OnInit {
  DataMonografi: Monografi;

  constructor(private http: HttpClient,
              private monografiHukumService: MonografiHukumService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      setTimeout(() => {
        this.monografiHukumService.getById(data.id).subscribe(result => {
          this.DataMonografi = result;
        });
      });
    });

  }
}
