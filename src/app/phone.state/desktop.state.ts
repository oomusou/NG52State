import { PhoneStateInterface } from './phone.state.interface';
import { MessageEnum } from './message.enum';
import { HomeState } from './home.state';

export class DesktopState implements PhoneStateInterface {
  getMessage(): MessageEnum {
    return MessageEnum.Desktop;
  }

  chkContext(state: PhoneStateInterface): boolean {
    return state.getMessage() === MessageEnum.Home;
  }

  handle(): PhoneStateInterface {
    return new HomeState();
  }
}
