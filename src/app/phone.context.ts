import { Inject, Injectable } from '@angular/core';
import { MessageEnum } from './message.enum';
import { PhoneStateInterface } from './phone.state.interface';
import { PhoneStateInterfaceToken } from './interface.token';

@Injectable()
export class PhoneContext {

  constructor(@Inject(PhoneStateInterfaceToken) private state: PhoneStateInterface) {
  }

  request(): MessageEnum {
    this.state = this.state.handle();
    return this.state.getMessage();
  }

  setState(state: PhoneStateInterface): MessageEnum {
    if (!state.chkContext(this.state)) {
      return MessageEnum.Null;
    } else {
      this.state = state;
      return state.getMessage();
    }
  }
}
