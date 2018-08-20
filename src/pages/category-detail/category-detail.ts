import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../categories/category';

@Component({
  selector: 'category-detail-list',
  templateUrl: 'category-detail.html'
})
export class CategoryDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  goToBack(){
  	this.navCtrl.push(CategoryPage);
  }
}
