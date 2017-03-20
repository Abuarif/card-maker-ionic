import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
    this.selectedItem = navParams.get('item');
  }

  save() {
    if (this.selectedItem.title || this.selectedItem.note) {
      this.selectedItem.updated = new Date();
    } else {
      this.events.publish('item:delete', this.selectedItem.id);
    }
    this.navCtrl.pop();
  }

  delete() {
    this.events.publish('item:delete', this.selectedItem.id);
    this.navCtrl.pop();
  }
}
