import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DstGridModule } from 'projects/dst-grid/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DstGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
