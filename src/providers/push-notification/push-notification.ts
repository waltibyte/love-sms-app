import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
/*
  Generated class for the PushNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushNotificationProvider {

  constructor(private oneSignal: OneSignal, private platform: Platform) { }
  init(){
    if (this.platform.is('core')) {

    }
    this.oneSignal.startInit('64cac847-7745-49b8-b68f-69b069970496', '570563211427');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });
    this.oneSignal.handleNotificationOpened().subscribe((notification) => {
    // do something when a notification is opened
    alert(JSON.stringify(notification));
    });
    this.oneSignal.endInit();
  }
}
