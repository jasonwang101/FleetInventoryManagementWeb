import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLandingPage : boolean = true;

  dismissLanding(event:boolean)
  {
    this.showLandingPage = event;
  }
}
