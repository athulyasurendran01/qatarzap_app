import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public translate: TranslateService, public navCtrl: NavController, public navParams: NavParams) {
    this.lang = 'en';
    localStorage.setItem("lang", this.lang);
    //this.translate.setDefaultLang('en');
    //this.translate.use('en');
  }
  gotoListing(){
  	this.navCtrl.push(ListPage);
  }
  switchLanguage() {
    //this.translate.use(this.lang);
    localStorage.setItem("lang", this.lang);
  }
}
