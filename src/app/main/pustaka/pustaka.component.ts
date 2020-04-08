import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pustaka } from '../../shared/models/pustaka';
import { PustakaService } from '../../shared/services/pustaka.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pustaka',
  templateUrl: './pustaka.component.html',
  styleUrls: ['./pustaka.component.scss']
})
export class PustakaComponent implements OnInit {
  dataReady: false;
  PustakaData;
  PustakaDataFiltered;
  LimitView;

  constructor(private http: HttpClient, private pustakaService: PustakaService) { }

  getBookInfoFromISBN(isbn){
    const url = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    this.http.get<string>(url).subscribe(data => {
      return data;
   });
  }

  LoadMore() {
    this.LimitView += 5;
    this.PustakaDataFiltered = this.PustakaData.slice(0, this.LimitView);
  }

  ngOnInit(): void {
    // Get Feedback Data
    this.pustakaService.getAll().subscribe(result => {
      this.PustakaData = result;
    },
      err => {
        this.pustakaService.getDefault()
        .pipe(
          map(r => {
            return r.map(element => {
              return {
                  ISBN : element.Isbn,
                  Judul : element.Judul,
                  Image : element.FileCover
                };
            });
          })
        )
        .subscribe(result => {
          this.PustakaData = result;
          this.LimitView = 5;
          this.PustakaDataFiltered = this.PustakaData.slice(0, this.LimitView);
        });
      }
    );
}

}
