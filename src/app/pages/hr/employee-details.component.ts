import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "../../service/hr/employee.service";
import {Title} from "@angular/platform-browser";
import {Employee} from "../../model/hr/employee";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: '../../../views/pages/hr/employeeDetails.html',
  providers: [EmployeeService],
})

export class EmployeeDetails implements OnInit {

  id: number;
  errorMessage: string;
  employee: Employee;

  public constructor(private titleService: Title,
                     private employeeService: EmployeeService,
                     private route: ActivatedRoute) {
    titleService.setTitle("Staff detail");
  }

  ngOnInit() {
    //this.getEmployee(params => {params['id']});
    this.route.params.subscribe(params => {this.id = +params['id']});
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployee(this.id).subscribe(
      employee => this.employee = employee,
      error => this.errorMessage = <any>error
    );
  }

}
