import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../categories/category';
import { UserService } from '../../app/user.service';
import { LayoutPage } from '../layout/layout';

@Component({
  selector: 'category-detail-list',
  templateUrl: 'category-detail.html'
})
export class CategoryDetailPage {

  category: number;
  categoryArray: any;
  facilities: any;
  hours: any;
  serverurl: string = '';

  constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
    this.serverurl = this.UserService.getServerURL()+'/images/package/';
  	this.category = this.navParams.get("category"); 
    this.UserService.apiTokenRequestGet('category/'+this.category, {})
      .map(res => res.json()).subscribe(data => {
        //alert(JSON.stringify(data))
        this.categoryArray = data.data.package;
        this.facilities = data.data.facilities;
        this.hours = data.data.working_hours;
      });
  }

  getList(item: string){
    this.navCtrl.push(CategoryPage, {
      category: item
    });
  }
  
  goToBack(){
  	this.navCtrl.push(CategoryPage);
  }

  gotoHome(){
    this.navCtrl.push(LayoutPage);
  }
}
