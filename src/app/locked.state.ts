import { PhoneStateInterface } from './phone.state.interface';
import { MessageEnum } from './message.enum';
import { UnlockedState } from './unlocked.state';

export class LockedState implements PhoneStateInterface {
  getMessage(): MessageEnum {
    return MessageEnum.Locked;
  }

  chkContext(state: PhoneStateInterface): boolean {
    return true;
  }

  handle(): PhoneStateInterface {
    return new UnlockedState();
  }
}
