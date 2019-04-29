import { Component, OnInit, ViewChild } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ScrollHideConfig } from '../../app/scroll-hide';
import { CategoryDetailPage } from '../category-detail/category-detail';
import { MapPage } from '../map/map';
import { LayoutPage } from '../layout/layout';
import { CategoryPage } from '../categories/category';
import { NewsBlog } from '../news-blog/news-blog';
import { UserService } from '../../app/user.service';
import { SuperTabs } from 'ionic2-super-tabs';

@Component({
  selector: 'category-layout-list',
  templateUrl: 'categoryLayout.html'
})
export class CategoryLayoutPage implements OnInit{
  
  results: any = [];
  categories: any = [];
  category: any = 'shop';
  subCate: any = [];
  pages: any = [
      { pageName: CategoryPage, title: 'Shop', id: 'shop'}
  ];

  selectedTab = 0;
  
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 70 };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 70 };

  constructor(private app : App, private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {}
  
  ngAfterViewInit() {
    let this_ = this;
    setTimeout(() => {
      this.pages.filter(function (category) {
        if(category.title===this_.category){
          this_.selectedTab = category.index;
          this_.superTabs.slideTo(this_.selectedTab);
        }      
      });
    }, 600);
  }

  ngOnInit(){    
    this.category = this.navParams.get("category"); 
    this.UserService.apiTokenRequestGet('categories/eng', {})
      .map(res => res.json()).subscribe(data => {
        var response = data.data;
        for(var i=1;i<response.length; i++){
          this.pages.push({
            pageName: CategoryPage,
            title: response[i].name,
            id : response[i].name,
            index: i
          });
        }
    });
  }

  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
    this.superTabs.clearBadge(this.pages[ev.index].id);
  }

  gotoHome(){
    this.navCtrl.push(LayoutPage);
  }

  getMore(){
    this.app.getRootNav().push(NewsBlog);
  }
}
