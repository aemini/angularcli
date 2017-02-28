import {Injectable} from "@angular/core";
import {AppSettings} from "../../app.settings";
import {Observable} from "rxjs";
import {BankAccount} from "../../model/finance/bank-account";
import {HttpServiceCommons} from "../http-service.common";

@Injectable()
export class BankAccountService extends HttpServiceCommons {

  private url = AppSettings.API_ENDPOINT + '/resource/bank/account';

  getBankAccounts(): Observable<BankAccount[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
