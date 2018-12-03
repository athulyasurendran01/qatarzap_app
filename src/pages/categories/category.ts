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
  
  results: any = [];
  categories: any = [];
  category: any = [];
  subCate: any = [];
  
  constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {  }

  ngOnInit() {
    this.UserService.apiTokenRequestGet('categories', {})
      .map(res => res.json()).subscribe(data => {
        //alert(JSON.stringify(data))
        this.categories = data.data;
      });

    this.category = this.navParams.get("category") ? this.navParams.get("category") : 'Shop';
    this.getList(this.category);

    this.UserService.apiTokenRequestGet('getSubCategory/'+this.category, {})
      .map(res => res.json()).subscribe(data => {
        this.subCate = data.data;
    });
  }

  getList(item: string){
    this.UserService.apiTokenRequestGet('list/'+item, {})
      .map(res => res.json()).subscribe(data => {
        this.results = data.data;
      });
  }

  categoryOnChange(item: string){
    this.getList(item)
  }

  goToDetail(id){
	   this.navCtrl.push(CategoryDetailPage, { category: id });
  }

  goToMap(id){
  	this.navCtrl.push(MapPage, { category: id });
  }

  getBlog(){
  	this.navCtrl.push(NewsBlog);
  }
}
