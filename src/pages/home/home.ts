import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { UserService } from '../../app/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, private UserService: UserService) {
	}

	gotoLogin(){
	  	this.navCtrl.push(LoginPage);
	}

}
