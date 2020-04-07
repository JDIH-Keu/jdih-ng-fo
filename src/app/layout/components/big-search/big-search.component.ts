import { Component, OnInit } from '@angular/core';
import { BentukPUUService } from '../../services/bentuk-puu.service';
import { ScopeService } from '../../services/scope.service';
import { BentukPUU } from '../../models/bentuk-puu';
import { Scope } from '../../models/scope';

@Component({
  selector: 'app-big-search',
  templateUrl: './big-search.component.html',
  styleUrls: ['./big-search.component.scss']
})
export class BigSearchComponent implements OnInit {
  showAdvancedSearch: boolean;

  selectedBentuk = '';
  selectedScope = '';
  BentukPUUItems: BentukPUU[];
  ScopeItems: Scope[];

  constructor(private bentukPUUService: BentukPUUService, private scopeService: ScopeService ) { }

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


}
