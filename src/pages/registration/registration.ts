import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'page-register',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoRegister(form){
    this.UserService.apiTokenRequest('register', form.value)
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
