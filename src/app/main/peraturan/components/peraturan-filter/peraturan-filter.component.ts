import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeraturanService } from '../../../../shared/services/peraturan.service';
import { BentukPUUService } from '../../../../shared/services/bentuk-puu.service';
import { ScopeService } from '../../../../shared/services/scope.service';
import { BentukPUU } from '../../../../shared/models/bentuk-puu';
import { Scope } from '../../../../shared/models/scope';


@Component({
  selector: 'app-peraturan-filter',
  templateUrl: './peraturan-filter.component.html',
  styleUrls: ['./peraturan-filter.component.scss']
})
export class PeraturanFilterComponent implements OnInit {
  BentukPUUItems: BentukPUU[];
  ScopeItems: Scope[];
  StatusItems;

  @Input() showCancelButton = false;
  @Output() searchEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  constructor(private peraturanService: PeraturanService,
              private bentukPUUService: BentukPUUService,
              private scopeService: ScopeService) { }

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

    this.StatusItems = [
      {
        Id: 1,
        Keterangan: 'Berlaku'
      },
      {
        Id: 2,
        Keterangan: 'Dicabut'
      }
    ];
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

  handleSearch($event){
    this.searchEvent.emit($event);
  }

  handleCancel($event){
    this.cancelEvent.emit($event);
  }

  reset() {

  }

}
