import { CssSelector } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    CssComponent,
    JsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
