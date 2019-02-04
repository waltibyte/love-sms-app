import { Messages } from './../../app/models/Messages/messages.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  msgId = {} as Messages;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.msgId = navParams.get('msgda');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsPage');
  }


}
