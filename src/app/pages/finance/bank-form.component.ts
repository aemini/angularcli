import {Component, Input} from "@angular/core";
import {Bank} from "../../model/bank";

@Component({
  moduleId: module.id,
  selector: 'bank-form',
  templateUrl: '../../../views/pages/finance/form/bank-form.html'
})

export class BankFormComponent {

  @Input()
  bank: Bank;

}
