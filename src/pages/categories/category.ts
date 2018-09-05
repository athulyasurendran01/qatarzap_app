import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryDetailPage } from '../category-detail/category-detail';
import { MapPage } from '../map/map';
import { NewsBlog } from '../news-blog/news-blog';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'category-list',
  templateUrl: 'category.html'
})
export class CategoryPage implements OnInit{
  
  results: any;
  categories: any;
  category: string;

  constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {  }

  ngOnInit() {
    this.UserService.apiTokenRequestGet('categories', {})
      .map(res => res.json()).subscribe(data => {
        //alert(JSON.stringify(data))
        this.categories = data.data;
      });

    this.category = this.navParams.get("category") ? this.navParams.get("category") : 'Shop';
    this.getList(this.category);
  }

  getList(item: string){
    this.UserService.apiTokenRequestGet('list/'+item, {})
      .map(res => res.json()).subscribe(data => {
        this.results = data.data;
      });
  }
  goToDetail(id){
	this.navCtrl.push(CategoryDetailPage, {
    category: id
  });
  }

  goToMap(){
  	this.navCtrl.push(MapPage);
  }

  getBlog(){
  	this.navCtrl.push(NewsBlog);
  }
}
