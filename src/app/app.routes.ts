import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {dashboardRoutes} from "./dashboard/dashboard.routes";

let routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...dashboardRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
