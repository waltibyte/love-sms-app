import { Messages } from './../../app/models/Messages/messages.interface';
import { FavouritesProvider } from './../../providers/favourites/favourites';
import { Observable } from 'rxjs';
import { AfoObjectObservable } from 'angularfire2-offline';
import { Component, Input, OnInit } from '@angular/core';
import { ItemsServiceProvider } from '../../providers/items-service/items-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SmsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-sms',
  templateUrl: 'sms.html'
})
export class SmsComponent implements OnInit {

  @Input() msgId = {} as Messages;
  msgs: Observable<any>;
  ms: AfoObjectObservable<any>;

  image: string = null;
  url: string = null;
  phoneNumber: string = null;

  sms: any;
  isFavorite = false;

  constructor(private item: ItemsServiceProvider, private socialSharing: SocialSharing, private favourite: FavouritesProvider, private toast: ToastController) {
    }

  ngOnInit(): void {
    this.getSmsId();
    this.favourite.isFavorite(this.msgId.text).then(isFav => {
      this.isFavorite = isFav;
    });
    this.getAllFavourites();
  }

   getSmsId(){
    this.ms = this.item.getSmsId(this.msgId.$key);
    return this.ms;
  }

  shareWhatsapp(message: string){
    this.socialSharing.shareViaWhatsApp(message, this.image, this.url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });;
  }

  shareFacebook(message: string){
    this.socialSharing.shareViaFacebook(message, this.image, this.url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });;
  }

  shareSms(message: string){
    this.socialSharing.shareViaSMS(message, this.phoneNumber).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });;
  }

  shareTwitter(message: string){
    this.socialSharing.shareViaTwitter(message, this.image, this.url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

  /*
  Section B
  Adding favourites sms to the SQL local storage
  */
  favoriteSms() {
    this.favourite.favoriteSms(this.ms.value.text).then(() => {
      this.isFavorite = true;
      this.toast.create({
        message: 'Successfully added to favourites',
        duration: 3000,
        position: 'top'
      }).present();
    });
  }

  unfavoriteSms() {
    this.favourite.unfavoriteSms(this.ms.value.text).then(() => {
      this.isFavorite = false;
      this.toast.create({
        message: 'Successfully removed from favourites',
        duration: 3000,
        position: 'top'
      }).present();
    });
  }
  getAllFavourites(){
    this.favourite.getAllFavoriteSmss().then(result => {
      console.log(result);
      return result;
    });
  }

}
