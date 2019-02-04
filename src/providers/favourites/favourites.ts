import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FavouritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const STORAGE_KEY = 'favoriteSms';

@Injectable()
export class FavouritesProvider {

  constructor(public storage: Storage) {
  }

  isFavorite(smsId) {
    return this.getAllFavoriteSmss().then(result => {
      return result && result.indexOf(smsId) !== -1;
    });
  }

  favoriteSms(smsId) {
    return this.getAllFavoriteSmss().then(result => {
      if (result) {
        result.push(smsId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [smsId]);
      }
    });
  }

  unfavoriteSms(smsId) {
    return this.getAllFavoriteSmss().then(result => {
      if (result) {
        var index = result.indexOf(smsId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteSmss() {
    return this.storage.get(STORAGE_KEY);
  }

}
