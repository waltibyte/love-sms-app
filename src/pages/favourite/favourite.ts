import { SocialSharing } from '@ionic-native/social-sharing';
import { FavouritesProvider } from './../../providers/favourites/favourites';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage implements OnInit {

  items: string[];
  itemsreload: string[];
  image: string = null;
  url: string = null;
  phoneNumber: string = null;

  constructor(private actionsheetCtrl: ActionSheetController, private socialSharing: SocialSharing,
     private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private favourite: FavouritesProvider) {
  }

  ngOnInit(): void {
    this.getAllFavourites();
  }

  selectfav(item){
    this.actionsheetCtrl.create({
      title: 'Favourite',
      buttons: [{
        text: 'share',
        handler: () => {
          this.share(item);
        }
      },
    {
      text: 'remove',
      role: 'destructive',
      handler: () => {
        this.unfavoriteSms(item);
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('The user has cancelled');
      }
    }]
    }).present();
  }

  getAllFavourites(){
    this.favourite.getAllFavoriteSmss().then(result => {
      this.items = result;
      console.log(this.items);
      return this.items;
    });
  }

  getAllFavouritesreload(){
    this.favourite.getAllFavoriteSmss().then(result => {
      this.items = result;
      console.log(this.items);
      return this.items;
    });
  }

  unfavoriteSms(item) {
    this.favourite.unfavoriteSms(item).then(() => {
      let toa = this.toast.create({
        message: 'Successfully removed from favourites',
        duration: 3000
      });
      toa.onDidDismiss(() => {
        this.getAllFavouritesreload();
      });
      toa.present();
    });
  }

  share(message: string){
    this.socialSharing.share(message, this.image, this.url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });;
  }
}
