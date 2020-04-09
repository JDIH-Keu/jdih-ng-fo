import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, RoutesRecognized, NavigationEnd } from '@angular/router';
import { HeaderService } from './shared/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageTitle: string;
  showSearchBox: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private headerService: HeaderService) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.showSearchBox = event.url === '/';
      }

      if (event instanceof RoutesRecognized) {
           const data = event.state.root.firstChild.data.title;
           this.pageTitle = data ? data : '';
        }
    });
  }

  ngOnInit(): void {
    this.headerService.getImage().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
