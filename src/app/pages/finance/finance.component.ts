import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
  templateUrl: '../../../views/pages/finance/finance.html'
})

export class FinanceComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle("Finance");
  }
}
