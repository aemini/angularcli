import {Routes} from "@angular/router";
import {HrComponent} from "./hr.component";
import {StaffComponent} from "./staff.component";

export const hrRoutes: Routes = [
  {path: 'hr', component: HrComponent},
  {path: 'hr/staff', component: StaffComponent}
];
