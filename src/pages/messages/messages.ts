import { Messages } from './../../app/models/Messages/messages.interface';
import { Categories } from './../../app/models/Categories/categories.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  catId = {} as Categories;
  msgId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.catId = navParams.get('catid');
  }

  getOneMessage(msgda: Messages){
    this.navCtrl.push('SmsPage', {msgda});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}
