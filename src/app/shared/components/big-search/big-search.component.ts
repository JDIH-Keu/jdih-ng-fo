import { Component, OnInit, Input } from '@angular/core';
import { BentukPUUService } from '../../../shared/services/bentuk-puu.service';
import { ScopeService } from '../../../shared/services/scope.service';
import { BentukPUU } from '../../../shared/models/bentuk-puu';
import { Scope } from '../../../shared/models/scope';

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
