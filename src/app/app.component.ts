import { Component } from '@angular/core';
import { MessageEnum } from './message.enum';
import { PhoneContext } from './phone.context';
import { AppState } from './app.state';
import { DesktopState } from './desktop.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = MessageEnum.Locked;

  constructor(private phoneContext: PhoneContext) {
  }

  onHomeClick() {
    this.message = this.phoneContext.request();
  }

  onOpenAppClick() {
    this.message = this.phoneContext.setState(new AppState());
  }

  onSwitchDesktopClick() {
    this.message = this.phoneContext.setState(new DesktopState());
  }
}
