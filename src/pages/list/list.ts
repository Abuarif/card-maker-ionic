import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.addItem();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, { item });
  }

  addItem() {
    this.items.unshift({
      title: 'Title',
      note: 'Content ...'
    });
    this.navCtrl.push(ItemDetailsPage, {
      item: this.items[0]
    });
  }
}
