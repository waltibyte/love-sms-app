import { Injectable } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate';
import { Platform } from 'ionic-angular';

/*
  Generated class for the RateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RateProvider {

  constructor(private AppRate: AppRate, private platform: Platform) {
  }

  init(){
    if (this.platform.is('core')) {

    }
    this.AppRate.preferences = {
      displayAppName: 'Love Sms App',
      usesUntilPrompt: 3,
      promptAgainForEachNewVersion: false,
      inAppReview: true,
      storeAppURL: {
        android: 'market://details?id=<package_name>',
      },
      customLocale: {
        title: "Would you mind rating %@?",
        message: "If you enjoy %@. Would you mind taking a minute to rate our app?. Thanks for your support!",
        cancelButtonLabel: "No, Thanks",
        laterButtonLabel: "Remind Me Later",
        rateButtonLabel: "Rate It Now",
        yesButtonLabel: "Yes!",
        noButtonLabel: "Not really",
        appRatePromptTitle: 'Do you like using %@',
        feedbackPromptTitle: 'Mind giving us some feedback?',
      },
      callbacks: {
        handleNegativeFeedback: function(){
          window.open('mailto:feedback@gmail.com','_system');
        },
        onRateDialogShow: function(callback){
          callback(1) // cause immediate click on 'Rate Now' button
        },
        onButtonClicked: function(buttonIndex){
          console.log("onButtonClicked -> " + buttonIndex);
        }
       }
    };

    this.AppRate.promptForRating(true);
  }
}
