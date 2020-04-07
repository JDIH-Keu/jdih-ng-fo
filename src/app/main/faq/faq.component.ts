import { Component, OnInit } from '@angular/core';
import { FAQService } from '../../shared/services/faq.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  data = [];
  searchText = '';

  constructor(private faqservice: FAQService) { }

  ngOnInit(): void {
    this.faqservice.getAll().subscribe(result => {
      this.data = result;
    },
      _err => {
        this.faqservice.getDefault().subscribe(result => {
          this.data = result;
        });
      }
    );
  }

}
