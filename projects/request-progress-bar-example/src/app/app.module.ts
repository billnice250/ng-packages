import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RequestProgressBarModule } from '@billnice/request-progress-bar';
import { EnvironmentBannerModule } from 'environment-strip-banner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RequestProgressBarModule,
    EnvironmentBannerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
