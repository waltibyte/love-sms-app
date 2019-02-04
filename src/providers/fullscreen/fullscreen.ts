import { Injectable } from '@angular/core';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Platform } from 'ionic-angular';

/*
  Generated class for the FullscreenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FullscreenProvider {

  constructor(private androidFullScreen: AndroidFullScreen, private platform: Platform) {
    console.log('Hello FullscreenProvider Provider');
  }

  init(){
    if (this.platform.is('core')) {

    }

    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => console.log('Immersive mode supported'))
    .catch(err => console.log(err));
  }

}
