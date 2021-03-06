import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LockedState } from './phone.state/locked.state';
import { PhoneContext } from './phone.state/phone.context';
import { PhoneStateInterfaceToken } from './phone.state/interface.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LockedState,
    PhoneContext,
    {provide: PhoneStateInterfaceToken, useExisting: LockedState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
