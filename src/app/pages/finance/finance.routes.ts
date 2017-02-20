import {Routes} from "@angular/router";
import {FinanceComponent} from "./finance.component";
import {BankComponent} from "./bank.component";

export const financeRoutes: Routes = [
  {path: 'finance', component: FinanceComponent},
  {path: 'finance/bank', component: BankComponent}
];
