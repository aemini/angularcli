import {Component, OnInit, ViewChild} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {BankService} from "../../service/finance/bank.service";
import {Bank} from "../../model/finance/bank";
import {ModalDirective} from "ng2-bootstrap";

@Component({
  moduleId: module.id,
  templateUrl: '../../../views/pages/finance/bank.html',
  providers: [BankService]
})

export class BankComponent implements OnInit {

  errorMessage: string;
  banks: Bank[];
  selectedBank: Bank;

  @ViewChild('lgModal') modal: ModalDirective;

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

  modalClose(): void {
    this.modal.hide();
    this.selectedBank = null;
  }

  saveChanges(bank: Bank): void {
    this.bankService.updateBank(bank).subscribe();
    this.modal.hide();
  }

  onSelect(bank: Bank): void {
    this.selectedBank = bank;
    this.modal.show();
  }

}
