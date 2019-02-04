import { Categories } from './../../app/models/Categories/categories.interface';
import { ItemsServiceProvider } from './../../providers/items-service/items-service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-category',
  templateUrl: 'category.html'
})
export class CategoryComponent implements OnInit {

  @Output() catid: EventEmitter<Categories>;

  cats: any[];
  msgs: any[];
  check: any;

  constructor(private itemserv: ItemsServiceProvider) {
    this.catid = new EventEmitter<Categories>();
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getTotallMessages();
  }

  getAllCategories(){
     this.itemserv.getAllCategoryc().subscribe(catss => this.cats = catss)
  }

  getTotallMessages(){
    return this.itemserv.getMessage().subscribe(data => {
      this.msgs = data;
      console.log(this.msgs);
      return this.msgs;
    });
  }

  selectCategory(item: Categories){
    this.catid.emit(item);
  }

}
