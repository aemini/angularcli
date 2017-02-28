import {Injectable} from "@angular/core";
import {AppSettings} from "../../app.settings";
import {Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Bank} from "../../model/finance/bank";
import {HttpServiceCommons} from "../http-service.common";

@Injectable()
export class BankService extends HttpServiceCommons {

  private url = AppSettings.API_ENDPOINT + '/resource/bank';

  getBanks(): Observable<Bank[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateBank(bank: Bank): Observable<Bank> {
    let bodyString = JSON.stringify(bank);
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(this.url + '/' + bank.id, bodyString, options)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
