import {Injectable} from "@angular/core";
import {AppSettings} from "../../app.settings";
import {Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {HttpServiceCommons} from "../http-service.common";
import {Employee} from "../../model/hr/employee";

@Injectable()
export class EmployeeService extends HttpServiceCommons {

  private url = AppSettings.API_ENDPOINT + '/resource/hr/employee';

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get(this.url + "/" + id)
      .map(this.extractData)
      .catch(this.handleError)
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    let bodyString = JSON.stringify(employee);
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(this.url + '/' + employee.id, bodyString, options)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
