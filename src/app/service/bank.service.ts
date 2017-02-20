import {Injectable} from "@angular/core";
import {AppSettings} from "../app.settings";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Bank} from "../model/bank";

@Injectable()
export class BankService {

  private url = AppSettings.API_ENDPOINT + '/resource/bank';

  constructor(private http: Http) {}

  getBanks(): Observable<Bank[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //TODO asagisi her yerde kullanilabilir, bunu ayiralim

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private handleError(error: Response | any) {
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
