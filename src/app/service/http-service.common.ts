import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpServiceCommons {

  constructor(protected http: Http) {}

  protected extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  protected handleError(error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
