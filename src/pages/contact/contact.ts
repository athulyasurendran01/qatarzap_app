import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LayoutPage } from '../layout/layout';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  gotoHome(){
    this.navCtrl.push(LayoutPage);
  }
}
