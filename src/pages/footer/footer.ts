import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html'
})
export class FooterPage {

	constructor(public navCtrl: NavController) {
	}

	gotoHome(){
	  	this.navCtrl.push(ListPage);
	}

}
