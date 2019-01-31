import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScrollHideConfig } from '../../app/scroll-hide';


import { SuperTabs } from 'ionic2-super-tabs';
import { Explore } from '../explore/explore';
import { ImageListPage } from '../image_list/image_list';
import { Leisure } from '../leisure/leisure';
import { QatarPage } from '../qatar/qatar';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.html'
})
export class LayoutPage {
  
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 0 };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: -50 };


  pages = [
      { pageName: Explore, title: 'Explore', id: 'newsTab'},
      { pageName: ImageListPage, title: 'Where to go?', id: 'aboutTab'},
      { pageName: Leisure, title: 'Leisure', id: 'accountTab'},
      { pageName: QatarPage, title: 'Qatar', id: 'accountTab'}
  ];
 
  selectedTab = 0;
 
  @ViewChild(SuperTabs) superTabs: SuperTabs;



  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
    this.superTabs.clearBadge(this.pages[ev.index].id);
  }
}
