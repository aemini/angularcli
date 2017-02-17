import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FooterComponent} from "./common/footer.component";
import {LeftNavComponent} from "./common/leftnav.component";
import {TopNavComponent} from "./common/topnav.component";
import {NavHeaderComponent} from "./common/navheader.component";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {routing} from "./app.routes";
import {FinanceComponent} from "./finance/finance.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FinanceComponent,
    FooterComponent,
    LeftNavComponent,
    NavHeaderComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
