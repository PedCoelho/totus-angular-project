import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';

import { SearchBarService } from './components/search-bar/shared/search-bar.service';

import { AppComponent } from './app.component';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    CardComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PoModule,
    PoFieldModule,
    PoTemplatesModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
