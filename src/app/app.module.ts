import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListAppareilComponent } from './list-appareil/list-appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
