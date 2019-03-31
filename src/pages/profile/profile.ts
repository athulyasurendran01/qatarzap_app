import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LayoutPage } from '../layout/layout';
import { ScrollHideConfig } from '../../app/scroll-hide';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  profile: boolean = true;
  list: boolean = false;
  password: boolean = false;
  newlist: boolean = false;
  mylist: boolean = true;
  
  personal = {
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    alteremail: ''

  };

  business = {
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    alteremail: ''

  };

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 70 };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 70 };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  logForm(form) {
    console.log(form.value)
  }
  gotoHome(){
    this.navCtrl.push(LayoutPage);
  }
  activeProfile(){
    this.profile = true;
    this.password = false;
    this.list = false;
  }
  activeList(){
    this.profile = false;
    this.password = false;
    this.list = true;
  }
  activePassword(){
    this.profile = false;
    this.list = false;
    this.password = true;
  }
  changePasswordForm(form){
    console.log(form.value)
  }
  addNewBusiness(){
    this.mylist = false;
    this.newlist = true;
  }
  viewList(){
    this.mylist = true;
    this.newlist = false;
  }
  saveBusiness(){

  }
}
