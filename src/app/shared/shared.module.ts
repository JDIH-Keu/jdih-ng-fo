import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';

import { TematikComponent } from './components/tematik/tematik.component';
import { GridItemsComponent } from './components/grid-items/grid-items.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { SecondaryNavigationComponent } from './components/secondary-navigation/secondary-navigation.component';
import { BigSearchComponent } from './components/big-search/big-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    MainNavigationComponent,
    SecondaryNavigationComponent,
    BigSearchComponent,
    TematikComponent,
    GridItemsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    MainNavigationComponent,
    SecondaryNavigationComponent,
    BigSearchComponent,
    TematikComponent,
    GridItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    RouterModule
  ],
  providers: []
})

export class SharedModule { }
