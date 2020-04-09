import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, RoutesRecognized, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageTitle: string;
  showSearchBox: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.showSearchBox = event.url === '/';
      }

      if (event instanceof RoutesRecognized) {
           const data = event.state.root.firstChild.data.title;
           this.pageTitle = data ? data : '';
        }

      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {

  }
}
