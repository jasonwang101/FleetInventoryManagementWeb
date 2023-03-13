import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  @Output() showLandingPage : EventEmitter<boolean> = new EventEmitter();

  onClick()
  {
    this.showLandingPage.emit(false);
  }
}
