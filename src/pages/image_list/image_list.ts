import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'image-list',
  templateUrl: 'image_list.html'
})
export class ImageListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
}
