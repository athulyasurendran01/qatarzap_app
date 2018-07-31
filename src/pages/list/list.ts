import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
}
