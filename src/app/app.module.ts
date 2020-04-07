import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { TematikComponent } from './layout/components/tematik/tematik.component';
import { PageTitleComponent } from './layout/components/page-title/page-title.component';
import { MainNavigationComponent } from './layout/components/main-navigation/main-navigation.component';
import { SecondaryNavigationComponent } from './layout/components/secondary-navigation/secondary-navigation.component';
import { BigSearchComponent } from './layout/components/big-search/big-search.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TematikComponent,
    PageTitleComponent,
    MainNavigationComponent,
    SecondaryNavigationComponent,
    BigSearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
