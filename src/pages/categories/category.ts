import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScrollHideConfig } from '../../app/scroll-hide';
import { CategoryDetailPage } from '../category-detail/category-detail';
import { MapPage } from '../map/map';
import { NewsBlog } from '../news-blog/news-blog';
import { UserService } from '../../app/user.service';
import { SuperTabs } from 'ionic2-super-tabs';

@Component({
  selector: 'category-list',
  templateUrl: 'category.html'
})
export class CategoryPage implements OnInit{
  
  results: any = [];
  categories: any = [];
  category: any = [];
  subCate: any = [];

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 0 };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: -50 };

  pages = [
      { pageName: MapPage, title: 'Explore', id: 'newsTab'},
      { pageName: MapPage, title: 'Where to go?', id: 'aboutTab'},
  ];
 
  selectedTab = 0;
 
  @ViewChild(SuperTabs) superTabs: SuperTabs;


  
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

  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
    this.superTabs.clearBadge(this.pages[ev.index].id);
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
