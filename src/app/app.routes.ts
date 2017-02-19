import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {dashboardRoutes} from "./pages/dashboard/dashboard.routes";
import {financeRoutes} from "./pages/finance/finance.routes";
import {hrRoutes} from "./pages/hr/hr.routes";

let routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...dashboardRoutes,
  ...financeRoutes,
  ...hrRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
