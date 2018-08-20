import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryDetailPage } from '../category-detail/category-detail';
import { MapPage } from '../map/map';
import { NewsBlog } from '../news-blog/news-blog';

@Component({
  selector: 'category-list',
  templateUrl: 'category.html'
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  goToDetail(){
	this.navCtrl.push(CategoryDetailPage);
  }

  goToMap(){
  	this.navCtrl.push(MapPage);
  }

  getBlog(){
  	this.navCtrl.push(NewsBlog);
  }
}
