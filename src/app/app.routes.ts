import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {dashboardRoutes} from "./dashboard/dashboard.routes";
import {financeRoutes} from "./finance/finance.routes";

let routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...dashboardRoutes,
  ...financeRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
