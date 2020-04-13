import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BentukPeradilanService } from '../../../../shared/services/bentuk-peradilan.service';
import { RefPeradilan } from '../../../../shared/models/main/references';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-putusan-filter',
  templateUrl: './putusan-filter.component.html',
  styleUrls: ['./putusan-filter.component.scss']
})
export class PutusanFilterComponent implements OnInit {
  BentukPeradilanItems: RefPeradilan[];

  @Input() showCancelButton = false;
  @Output() searchEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  @ViewChild('filterForm', { static: true }) filterForm: NgForm;

  constructor(private bentukPeradilan: BentukPeradilanService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      const {limit, offset, ...params} = data;
      setTimeout(() => {
        this.filterForm.setValue(
          Object.assign(this.filterForm.value, params));
      }, 1000);
    });

    this.bentukPeradilan.getAll().subscribe(result => {
      this.BentukPeradilanItems = result;
    },
      err => {
        this.bentukPeradilan.getDefault().subscribe(result => {
          this.BentukPeradilanItems = result;
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
