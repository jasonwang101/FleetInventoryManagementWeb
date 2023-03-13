import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLandingPage : boolean = false;

  dismissLanding(event:boolean)
  {
    this.showLandingPage = event;
  }
}
