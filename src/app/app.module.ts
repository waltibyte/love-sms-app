import { OneSignal } from '@ionic-native/onesignal';
import { AppRate } from '@ionic-native/app-rate';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemsServiceProvider } from '../providers/items-service/items-service';

import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './config.firebase';

import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage';
import { FavouritesProvider } from '../providers/favourites/favourites';
import { PushNotificationProvider } from '../providers/push-notification/push-notification';
import { RateProvider } from '../providers/rate/rate';
import { FullscreenProvider } from '../providers/fullscreen/fullscreen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireOfflineModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsServiceProvider,
    FavouritesProvider,
    OneSignal,
    AppRate,
    AndroidFullScreen,
    PushNotificationProvider,
    RateProvider,
    FullscreenProvider
  ]
})
export class AppModule {}
