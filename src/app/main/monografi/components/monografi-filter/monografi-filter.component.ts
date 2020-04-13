import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BidangHukumService } from '../../../../shared/services/bidang-hukum.services';
import { RefHukum } from '../../../../shared/models/main/references';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-monografi-filter',
  templateUrl: './monografi-filter.component.html',
  styleUrls: ['./monografi-filter.component.scss']
})
export class MonografiFilterComponent implements OnInit {
  BidangHukumItems: RefHukum[];

  @Input() showCancelButton = false;
  @Output() searchEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  @ViewChild('filterForm', { static: true }) filterForm: NgForm;

  constructor(private bidangHukumService: BidangHukumService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      const {limit, offset, ...params} = data;
      setTimeout(() => {
        this.filterForm.setValue(
          Object.assign(this.filterForm.value, params));
      }, 1000);
    });

    this.bidangHukumService.getAll().subscribe(result => {
      this.BidangHukumItems = result;
    },
      err => {
        this.bidangHukumService.getDefault().subscribe(result => {
          this.BidangHukumItems = result;
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
