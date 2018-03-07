import { PhoneStateInterface } from './phone.state.interface';
import { MessageEnum } from './message.enum';
import { HomeState } from './home.state';

export class AppState implements PhoneStateInterface {
  getMessage(): MessageEnum {
    return MessageEnum.App;
  }

  chkContext(state: PhoneStateInterface): boolean {
    return state.getMessage() === MessageEnum.Home ? true :
           state.getMessage() === MessageEnum.Desktop;
  }

  handle(): PhoneStateInterface {
    return new HomeState();
  }
}
