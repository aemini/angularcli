import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FooterComponent} from "./common/footer.component";
import {LeftNavComponent} from "./common/leftnav.component";
import {TopNavComponent} from "./common/topnav.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftNavComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
