import { Component, OnInit, ElementRef } from '@angular/core';
import { PageMenu } from '../../models/page-menu';
import { PageMenuService } from '../../services/page-menu.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
  providers: [PageMenuService]
})
export class MainNavigationComponent implements OnInit {
  constructor(private menuService: PageMenuService, private el: ElementRef) { }

  pageMenus: PageMenu[] = [];

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.menuService.getAll().subscribe(result => {
      this.pageMenus = result;
    },
      err => {
        this.menuService.getDefault().subscribe(result => {
          this.pageMenus = result;
        });
      }
    );
  }

  expandMenu(event) {
    const grandParent = event.target.closest('ul');
    grandParent.childNodes.forEach(element => {
      if (element.nodeName !== '#comment' && element.classList.contains('nav-item')) {
        element.classList.remove('hover');
      }
    });

    const parent = event.target.closest('li');
    if (parent.classList.contains('hover')) {
      parent.classList.remove('hover');
    }
    else {
      parent.classList.add('hover');
    }
  }

  hasChild(menu: PageMenu): boolean {
    return menu.Items && menu.Items.length > 0;
  }

  isExternalLink(link: string) {
    return link.slice(0, 4) === 'http';
  }
}
