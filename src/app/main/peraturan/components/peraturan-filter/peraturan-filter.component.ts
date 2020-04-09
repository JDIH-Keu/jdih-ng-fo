import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PeraturanService } from '../../../../shared/services/peraturan.service';
import { BentukPUUService } from '../../../../shared/services/bentuk-puu.service';
import { ScopeService } from '../../../../shared/services/scope.service';
import { RefBentuk } from '../../../../shared/models/main/references';
import { Scope } from '../../../../shared/models/scope';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-peraturan-filter',
  templateUrl: './peraturan-filter.component.html',
  styleUrls: ['./peraturan-filter.component.scss']
})
export class PeraturanFilterComponent implements OnInit {
  BentukPUUItems: RefBentuk[];
  ScopeItems: Scope[];
  StatusItems;

  @Input() showCancelButton = false;
  @Output() searchEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  @ViewChild('filterForm', { static: true })filterForm: NgForm;

  constructor(private peraturanService: PeraturanService,
              private bentukPUUService: BentukPUUService,
              private scopeService: ScopeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      setTimeout(() => {
      this.filterForm.setValue(Object.assign(this.filterForm.value, data));
      }, 1000);
    });

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

  handleSearch(form: NgForm) {
    this.searchEvent.emit(form.value);
  }

  handleCancel($event) {
    this.cancelEvent.emit($event);
  }

  reset(form: NgForm) {
    form.resetForm();
  }

}
