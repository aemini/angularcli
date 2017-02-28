import {Component, OnInit} from "@angular/core";
import {BankAccountService} from "../../service/finance/bank-account.service";
import {BankAccount} from "../../model/finance/bank-account";
import {Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  templateUrl: '../../../views/pages/finance/bank-account.html',
  providers: [BankAccountService]
})

export class BankAccountComponent implements OnInit {

  errorMessage: string;
  bankAccounts: BankAccount[];
  selectedBankAccount: BankAccount;

  public constructor(private titleService: Title,
                     private bankAccountService: BankAccountService) {
    titleService.setTitle("Bank accounts");
  }

  ngOnInit() {
    this.getBankAccounts();
  }

  getBankAccounts() {
    this.bankAccountService.getBankAccounts().subscribe(
      bankAccounts => this.bankAccounts = bankAccounts,
      error => this.errorMessage = <any>error
    );
  }

  onSelect(bankAccount: BankAccount): void {
    this.selectedBankAccount = bankAccount;
  }

}
