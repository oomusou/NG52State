import { PhoneStateInterface } from './phone.state.interface';
import { MessageEnum } from './message.enum';

export class HomeState implements PhoneStateInterface {
  getMessage(): MessageEnum {
    return MessageEnum.Home;
  }

  chkContext(state: PhoneStateInterface): boolean {
    return true;
  }

  handle(): PhoneStateInterface {
    return new HomeState();
  }
}
