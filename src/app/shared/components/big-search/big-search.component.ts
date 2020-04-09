import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BentukPUUService } from '../../../shared/services/bentuk-puu.service';
import { ScopeService } from '../../../shared/services/scope.service';
import { BentukPUU } from '../../../shared/models/bentuk-puu';
import { Scope } from '../../../shared/models/scope';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-big-search',
  templateUrl: './big-search.component.html',
  styleUrls: ['./big-search.component.scss']
})
export class BigSearchComponent implements OnInit {
  showAdvancedSearch: boolean;
  BentukPUUItems: BentukPUU[];
  ScopeItems: Scope[];

  constructor(private bentukPUUService: BentukPUUService, private scopeService: ScopeService, private router: Router) { }

  ngOnInit(): void {
    this.bentukPUUService.getAll().subscribe(result => {
      this.BentukPUUItems = result;
    },
      err => {
        this.bentukPUUService.getDefault().subscribe(result => {
          this.BentukPUUItems = result;
        });
      }
    );

    this.scopeService.getAll().subscribe(result => {
      this.ScopeItems = result;
    },
      err => {
        this.scopeService.getDefault().subscribe(result => {
          this.ScopeItems = result;
        });
      }
    );


  }

  search(form: NgForm) {
    // const params = Object.assign(form.value, {Isi: '', Status: ''})

    this.router.navigate(['/peraturan/list'], {
      queryParams: form.value,
      fragment: 'anchor'
    });
  }


}
