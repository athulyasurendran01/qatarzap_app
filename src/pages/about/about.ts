import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LayoutPage } from '../layout/layout';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  gotoHome(){
    this.navCtrl.push(LayoutPage);
  }
}
