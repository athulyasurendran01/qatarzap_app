import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryLayoutPage } from '../category_layout/categoryLayout';

@Component({
  selector: 'news-detail-more-list',
  templateUrl: 'news-detail-more.html'
})
export class NewsMorePage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  	}

  	goToBack(){
	  	this.navCtrl.push(CategoryLayoutPage);
	  }
}
