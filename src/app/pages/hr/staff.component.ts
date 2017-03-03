import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Employee} from "../../model/hr/employee";
import {EmployeeService} from "../../service/hr/employee.service";

@Component({
  moduleId: module.id,
  templateUrl: '../../../views/pages/hr/staff.html',
  providers: [EmployeeService],
  styles: [`.contact-box
{
	height:380px;
}
.dikey-ortala {
   position: relative;
   top: 50%;
   transform: translateY(-50%);
   text-align:center;
}`]
})

export class StaffComponent implements OnInit {
  errorMessage: string;
  employees: Employee[];
  selectedEmployee: Employee;

  public constructor(private titleService: Title,
                     private employeeService: EmployeeService) {
    titleService.setTitle("Staff");
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      employees => this.employees = employees,
      error => this.errorMessage = <any>error
    );
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    //this.modal.show();
  }
}
