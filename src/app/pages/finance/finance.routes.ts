import {Routes} from "@angular/router";
import {FinanceComponent} from "./finance.component";
import {BankComponent} from "./bank.component";
import {BankAccountComponent} from "./bank-account.component";

export const financeRoutes: Routes = [
  {path: 'finance', component: FinanceComponent},
  {path: 'finance/bank', component: BankComponent},
  {path: 'finance/bank-account', component: BankAccountComponent}
];
