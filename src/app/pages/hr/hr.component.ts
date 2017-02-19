import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
  templateUrl: '../../../views/pages/hr/hr.html'
})

export class HrComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle("Human resources");
  }
}
