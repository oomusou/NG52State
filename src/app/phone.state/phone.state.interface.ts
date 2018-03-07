import { MessageEnum } from './message.enum';

export interface PhoneStateInterface {
  getMessage(): MessageEnum;
  chkContext(state: PhoneStateInterface): boolean;
  handle(): PhoneStateInterface;
}
