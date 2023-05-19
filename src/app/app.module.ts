import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RateCardComponent } from './components/rateCard/rateCard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
