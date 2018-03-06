import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private state = 'Locked';
  message = 'The phone is locked';

  onHomeClick() {
    if (this.state === 'Locked') {
      this.state = 'Unlocked';
      this.message = 'The phone is unlocked';
    } else if (this.state === 'Unlocked') {
      this.state = 'Home';
      this.message = 'The phone is at home';
    } else if (this.state === 'App') {
      this.state = 'Home';
      this.message = 'The phone is at home';
    } else if (this.state === 'Desktop') {
      this.state = 'Home';
      this.message = 'The phone is at home';
    } else {
      this.state = 'Home';
      this.message = 'The phone is at home';
    }
  }

  onOpenAppClick() {
    if (this.state === 'Home' || this.state === 'Desktop') {
      this.state = 'App';
      this.message = 'The phone is opening app';
    } else {
      this.state = 'Null';
      this.message = 'The operation is not allowed';
    }
  }

  onSwitchDesktopClick() {
    if (this.state === 'Home') {
      this.state = 'Desktop';
      this.message = 'The phone is switching desktop';
    } else {
      this.state = 'Null';
      this.message = 'The operation is not allowed';
    }
  }
}
