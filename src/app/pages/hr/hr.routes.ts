import {Routes} from "@angular/router";
import {HrComponent} from "./hr.component";
import {StaffComponent} from "./staff.component";
import {EmployeeDetails} from "./employee-details.component";

export const hrRoutes: Routes = [
  {path: 'hr', component: HrComponent},
  {path: 'hr/staff', component: StaffComponent},
  {path: 'hr/staff/:id', component: EmployeeDetails}
];
