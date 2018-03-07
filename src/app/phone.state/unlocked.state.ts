import { PhoneStateInterface } from './phone.state.interface';
import { MessageEnum } from './message.enum';
import { HomeState } from './home.state';

export class UnlockedState implements PhoneStateInterface {
  getMessage(): MessageEnum {
    return MessageEnum.Unlocked;
  }

  chkContext(state: PhoneStateInterface): boolean {
    return state.getMessage() === MessageEnum.Locked;
  }

  handle(): PhoneStateInterface {
    return new HomeState();
  }
}
