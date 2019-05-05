import { Component, ViewChild } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { ScrollHideConfig } from '../../app/scroll-hide';

import { NewsBlog } from '../news-blog/news-blog';
import { SuperTabs } from 'ionic2-super-tabs';
import { Explore } from '../explore/explore';
import { ImageListPage } from '../image_list/image_list';
import { Leisure } from '../leisure/leisure';
import { QatarPage } from '../qatar/qatar';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 70 };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 70 };

  pages: any=[];
  selectedTab = 0;
  toggled_search: boolean = false;
  searchInput: string = '';
 
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(private UserService: UserService, private app : App, public navCtrl: NavController) {
    this.toggled_search = false;

    if((window.localStorage.language) && (window.localStorage.language != 'eng')){
      this.pages = [
          { pageName: Explore, title: 'استكشاف  ', id: 'exploreTab'},
          { pageName: ImageListPage, title: 'الى اين اذهب؟ ', id: 'listTab'},
          { pageName: Leisure, title: 'راحة ', id: 'leisureTab'},
          { pageName: QatarPage, title: 'قطر ', id: 'qatarTab'}
      ];
    }else{
      this.pages = [
          { pageName: Explore, title: 'Explore', id: 'exploreTab'},
          { pageName: ImageListPage, title: 'Where to go?', id: 'listTab'},
          { pageName: Leisure, title: 'Leisure', id: 'leisureTab'},
          { pageName: QatarPage, title: 'Qatar', id: 'qatarTab'}
      ];
    }
  }

  toggleSearch(){
    this.toggled_search = !this.toggled_search;
  }

  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
    this.superTabs.clearBadge(this.pages[ev.index].id);
  }
  gotoHome(){
    this.navCtrl.push(HomePage);
  }
  
  searchThis(evt: any){
    
  }

  // searchThis(evt: any){
  //   let input = this.searchInput;
  //   this.UserService.apiTokenRequestGet('search_by_input/'+input, {})
	//     .map(res => res.json()).subscribe(data => {
	//     	console.log(data.data);
  //   });
  // }

  cancelSearch(evt: any){
    this.searchInput = '';
  }

}
