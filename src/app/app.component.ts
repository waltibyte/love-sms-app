import { FullscreenProvider } from './../providers/fullscreen/fullscreen';
import { RateProvider } from './../providers/rate/rate';
import { PushNotificationProvider } from './../providers/push-notification/push-notification';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, icon: string, component: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public pushnotifcation: PushNotificationProvider,
  public rateapp: RateProvider, private fullscreen: FullscreenProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'home', component: 'HomePage' },
      { title: 'Favourite', icon: 'heart', component: 'FavouritePage' },
      { title: 'More Apps', icon: 'apps', component: 'MoreAppPage' },
      { title: 'About App', icon: 'information-circle', component: 'AboutPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.pushnotifcation.init();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rateapp.init();
      this.fullscreen.init();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
