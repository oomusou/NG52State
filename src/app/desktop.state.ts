import { PhoneStateInterface } from './phone.state.interface';
import { MessageEnum } from './message.enum';
import { HomeState } from './home.state';

export class DesktopState implements PhoneStateInterface {
  getMessage(): MessageEnum {
    return MessageEnum.Desktop;
  }

  chkContext(state: PhoneStateInterface): boolean {
    if (state.getMessage() === MessageEnum.Home) {
      return true;
    }

    return false;
  }

  handle(): PhoneStateInterface {
    return new HomeState();
  }
}
