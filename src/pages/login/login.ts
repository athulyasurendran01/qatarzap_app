import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
  /*  this.lang = 'en';
    localStorage.setItem("lang", this.lang);
    //this.translate.setDefaultLang('en');
    //this.translate.use('en');*/
  }
  gotoLogin(form){
    this.UserService.apiTokenRequest('login', form.value)
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
        //localStorage.setItem("userId", data.userid);
        this.navCtrl.push(ListPage);
	    },
		error => {
			alert(error);
    });
  }
  goBack(){
    this.navCtrl.pop();
  }
}
