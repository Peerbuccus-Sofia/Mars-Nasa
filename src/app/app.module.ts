import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarsComponent } from './mars/mars.component';
import { ListImagesComponent } from './list-images/list-images.component';

@NgModule({
  declarations: [
    AppComponent,
    MarsComponent,
    ListImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
