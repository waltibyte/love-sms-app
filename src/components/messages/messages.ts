import { Messages } from './../../app/models/Messages/messages.interface';
import { Categories } from './../../app/models/Categories/categories.interface';
import { AfoObjectObservable } from 'angularfire2-offline';
import { ItemsServiceProvider } from './../../providers/items-service/items-service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the MessagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-messages',
  templateUrl: 'messages.html'
})
export class MessagesComponent implements OnInit {

  @Output() msgId: EventEmitter<Messages>
  @Input() catId = {} as Categories;
  msgs: any[];
  msgOb: AfoObjectObservable<any>;


  constructor(private item: ItemsServiceProvider) {
    this.msgId = new EventEmitter<Messages>();
  }

  ngOnInit(): void {
    this.getAllMessagesById();
    this.getAllMessagesById();
    console.log(this.msgs);
  }

  getAllMessagesById(){
    this.item.getMessageById(this.catId.$key).subscribe(mss => this.msgs = mss)
  }

  selectaMessage(msgdata: Messages){
    this.msgId.emit(msgdata);
  }

  getDifferenceInDays(theDate): number {
    // Get 1 day in milliseconds
    const one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    const the_Date = new Date(theDate).getTime();
    const now_date = new Date().getTime();

    // Calculate the difference in milliseconds
    const difference_ms = now_date - the_Date;

    // Convert back to days and return
    return Math.round(difference_ms/one_day);
  }
}
