import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ImageListPage } from '../image_list/image_list';
import { Leisure } from '../leisure/leisure';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  gotoSecondTab(){
	this.navCtrl.push(ImageListPage);
  }
  gotoThirdTab(){
  	this.navCtrl.push(Leisure);
  }
}
