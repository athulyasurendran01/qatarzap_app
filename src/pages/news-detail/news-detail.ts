import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../categories/category';

@Component({
  selector: 'news-detail-list',
  templateUrl: 'news-detail.html'
})
export class NewsDetail {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  	}

  	goToBack(){
	  	this.navCtrl.push(CategoryPage);
	  }
}
