import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  maxId: number;
  items: Array<{ id: number, title: string, note: string, updated: Date }>;

  constructor(
    public navCtrl: NavController,
    public events: Events
  ) {

    this.maxId = 0;

    this.items = [{
      id: this.maxId++,
      title: 'Example Card',
      note: 'You can edit this card',
      updated: new Date()
    }];

    this.events.subscribe('item:delete', id => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, { item });
  }

  addItem() {
    this.items.unshift({
      id: this.maxId++,
      title: '',
      note: '',
      updated: new Date()
    });
    this.navCtrl.push(ItemDetailsPage, {
      item: this.items[0]
    });
  }
}
