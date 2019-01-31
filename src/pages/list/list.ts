import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/user.service';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

    explore: boolean = true;
    where_to_go: boolean = false;
    leisure: boolean = false;
    qatar: boolean = false;
    lang:any;
    pages: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.lang = 'en';
      this.pages = [
        { title: 'List', component: ListPage }
      ];
    }
    
    switchLanguage() {
      //this.translate.use(this.lang);
      localStorage.setItem('language', this.lang);
    languages: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private UserService: UserService,) {
     
      this.UserService.apiTokenRequestGet('getcontent', {'lang':localStorage.getItem("lang")})
	    .map(res => res.json()).subscribe(data => {
        this.languages = {
          'explore': "Explore",
        };
	    });
    }
    activeExplore(){
      this.explore = true;
      this.where_to_go = false;
      this.leisure = false;
      this.qatar = false;
    }
    activeWhereToGo(){
      this.explore = false;
      this.where_to_go = true;
      this.leisure = false;
      this.qatar = false;
    }
    activeLeisure(){
      this.explore = false;
      this.where_to_go = false;
      this.leisure = true;
      this.qatar = false;
    }
    activeQatar(){
      this.explore = false;
      this.where_to_go = false;
      this.leisure = false;
      this.qatar = true;
    }
}
