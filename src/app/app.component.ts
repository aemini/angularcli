import { Component, ViewEncapsulation } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: '../views/layout.html',
  styleUrls: ['../assets/css/style.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'app works!';
  public constructor(private titleService: Title) {
    titleService.setTitle("Dashboard");
  }

}
