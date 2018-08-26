import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../categories/category';

@Component({
  selector: 'news-detail-more-list',
  templateUrl: 'news-detail-more.html'
})
export class NewsMorePage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  	}

  	goToBack(){
	  	this.navCtrl.push(CategoryPage);
	  }
}
