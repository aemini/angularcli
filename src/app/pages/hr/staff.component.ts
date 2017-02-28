import {Component, ViewChild} from "@angular/core";
import {BankService} from "../../service/bank.service";
import {Bank} from "../../model/bank";
import {ModalDirective} from "ng2-bootstrap";
import {Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  templateUrl: '../../../views/pages/hr/staff.html',
  providers: [BankService],
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

export class StaffComponent {
  errorMessage: string;
  banks: Bank[];
  selectedBank: Bank;

  @ViewChild('lgModal') modal: ModalDirective;

  public constructor(private titleService: Title,
                     private bankService: BankService) {
    titleService.setTitle("Staff");
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
    this.modal.show();
  }
}
