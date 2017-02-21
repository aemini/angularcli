import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FooterComponent} from "./common/footer.component";
import {LeftNavComponent} from "./common/leftnav.component";
import {TopNavComponent} from "./common/topnav.component";
import {NavHeaderComponent} from "./common/navheader.component";

import {routing} from "./app.routes";

import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {FinanceComponent} from "./pages/finance/finance.component";
import {HrComponent} from "./pages/hr/hr.component";
import {BankComponent} from "./pages/finance/bank.component";
import {BankFormComponent} from "./pages/finance/bank-form.component";

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    BankFormComponent,
    DashboardComponent,
    FinanceComponent,
    FooterComponent,
    HrComponent,
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
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
