import { Injectable } from '@angular/core';

import { AfoListObservable, AfoObjectObservable, AngularFireOfflineDatabase } from 'angularfire2-offline';

/*
  Generated class for the ItemsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsServiceProvider {

  categoryObject: AfoObjectObservable<any[]>;
  messageObject: AfoObjectObservable<any[]>;
  categoryList: AfoListObservable<any[]>;
  messageList: AfoListObservable<any[]>;

  constructor(private db: AngularFireOfflineDatabase) {

  }

  getAllCategory(){
    this.categoryList = this.db.list('category-names');
    return this.categoryList;
  }

  getAllCategoryc(){
    this.categoryList = this.db.list('category-names', {
      query: {
        orderByChild: 'timestamp'
      }
    });
    return this.categoryList;
  }

  getMessageById(id: string){
    this.messageList = this.db.list(`/messages-names`, {
      query: {
        orderByChild: 'categorykey',
        equalTo: id
      }
    });
    return this.messageList;
  }

  getMessage(){
    this.messageList = this.db.list('messages-names');
    return this.messageList;
  }

  getSmsId(id:string){
    this.messageObject = this.db.object(`/messages-names/${id}`);
    return this.messageObject;
  }

}
