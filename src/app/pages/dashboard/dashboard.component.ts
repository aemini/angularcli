import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
  templateUrl: '../../../views/pages/dashboard/dashboard.html'
})

export class DashboardComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle("Dashboard");
  }
}
