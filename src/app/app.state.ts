import { PhoneStateInterface } from './phone.state.interface';
import { MessageEnum } from './message.enum';
import { HomeState } from './home.state';

export class AppState implements PhoneStateInterface {
  getMessage(): MessageEnum {
    return MessageEnum.App;
  }

  chkContext(state: PhoneStateInterface): boolean {
    if (state.getMessage() === MessageEnum.Home) {
      return true;
    }

    if (state.getMessage() === MessageEnum.Desktop) {
      return true;
    }

    return false;
  }

  handle(): PhoneStateInterface {
    return new HomeState();
  }
}
