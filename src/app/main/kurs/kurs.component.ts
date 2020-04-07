import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.scss']
})
export class KursComponent implements OnInit {
  tableData: any;
  tableString: any;
  nomorKMK = '';
  linkKMK: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getKurs();
  }

  getKurs(): void {
    const url = 'https://cors-anywhere.herokuapp.com/https://fiskal.kemenkeu.go.id/dw-kurs-db.asp';
    const options = { responseType: 'text' as 'json'};
    this.http.get<string>(url, options).subscribe(data => {
      const domparser = new DOMParser()​​;
      const doc = domparser.parseFromString(data, 'text/html');

      this.nomorKMK = doc.querySelector('h3').innerHTML;
      this.linkKMK = 'https://fiskal.kemenkeu.go.id/' + doc.querySelector('.fa-file-pdf-o').parentElement.getAttribute('href');
      this.tableData = doc.querySelector('.table-responsive');
      const images = this.tableData.querySelectorAll('img');
      images.forEach(element => {
        element.src = element.src.replace(location.origin, 'https://fiskal.kemenkeu.go.id');
      });

      this.tableString = this.tableData.innerHTML;

  });
  }

}
