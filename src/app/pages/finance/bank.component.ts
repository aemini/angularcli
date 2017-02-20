import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {BankService} from "../../service/bank.service";
import {Bank} from "../../model/bank";

@Component({
  moduleId: module.id,
  templateUrl: '../../../views/pages/finance/bank.html',
  providers: [BankService]
})

export class BankComponent implements OnInit {

  errorMessage: string;
  banks: Bank[];
  selectedBank: Bank;

  public constructor(private titleService: Title,
                     private bankService: BankService) {
    titleService.setTitle("Banks");
  }

  ngOnInit() {
    this.getBanks();
  }

  getBanks() {
    this.bankService.getBanks().subscribe(
      banks => this.banks = banks,
      error => this.errorMessage = <any>error
    );
  }

  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }

}
