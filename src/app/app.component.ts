import { Component } from '@angular/core';
import { MessageEnum } from './message.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = MessageEnum.Locked;

  onHomeClick() {
    if (this.message === MessageEnum.Locked) {
      this.message = MessageEnum.Unlocked;
      return;
    }

    if (this.message === MessageEnum.Unlocked) {
      this.message = MessageEnum.Home;
      return;
    }

    if (this.message === MessageEnum.App) {
      this.message = MessageEnum.Home;
      return;
    }

    if (this.message === MessageEnum.Desktop) {
      this.message = MessageEnum.Home;
      return;
    }

    this.message = MessageEnum.Home;
  }

  onOpenAppClick() {
    if (this.message === MessageEnum.Home || this.message === MessageEnum.Desktop) {
      this.message = MessageEnum.App;
      return;
    }

    this.message = MessageEnum.Null;
  }

  onSwitchDesktopClick() {
    if (this.message === MessageEnum.Home) {
      this.message = MessageEnum.Desktop;
      return;
    }

    this.message = MessageEnum.Null;
  }
}
