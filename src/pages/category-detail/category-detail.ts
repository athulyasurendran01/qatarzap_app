import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../categories/category';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'category-detail-list',
  templateUrl: 'category-detail.html'
})
export class CategoryDetailPage {

  category: number;
  
  constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {

  	this.category = this.navParams.get("category");
    this.UserService.apiTokenRequestGet('category/'+this.category, {})
      .map(res => res.json()).subscribe(data => {
        //alert(JSON.stringify(data))
        this.categories = data.data;
      });

    this.category = this.navParams.get("category");
    this.getList(this.category);
  }

  goToBack(){
  	this.navCtrl.push(CategoryPage);
  }
}
