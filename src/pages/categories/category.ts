import { Component, OnInit } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ScrollHideConfig } from '../../app/scroll-hide';
import { CategoryDetailPage } from '../category-detail/category-detail';
import { MapPage } from '../map/map';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'category-list',
  templateUrl: 'category.html'
})
export class CategoryPage implements OnInit{
  
  results: any = [];
  categories: any = [];
  subCate: any = [];
  selectedOption: string = '0';
  category: string;
  serverurl: string = '';

  constructor(private app : App, private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {  
    this.serverurl = this.UserService.getServerURL()+'/images/package/';
  }

  ngOnInit() {
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
    this.app.getRootNav().push(MapPage, {category: id});
  }

}
