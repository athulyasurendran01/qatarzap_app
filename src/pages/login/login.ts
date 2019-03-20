import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  /*  this.lang = 'en';
    localStorage.setItem("lang", this.lang);
    //this.translate.setDefaultLang('en');
    //this.translate.use('en');*/
  }
  gotoListing(){
  	this.navCtrl.push(ListPage);
  }
  switchLanguage() {
    //localStorage.setItem("lang", this.lang);
  }
}
