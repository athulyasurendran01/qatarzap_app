import { Component, OnInit } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../app/user.service';
import { CategoryLayoutPage } from '../category_layout/categoryLayout';

@Component({
  selector: 'explore-list',
  templateUrl: 'explore.html'
})
export class Explore implements OnInit{
	
	explore_items: any = [];

	constructor(private app : App, private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {}

	ngOnInit() {
		var lang = window.localStorage.language;
	    this.UserService.apiTokenRequestGet('categories/'+lang, {})
	    .map(res => res.json()).subscribe(data => {
	    	this.explore_items = data.data;
	    },
		error => {
			alert(error);
	   });
	}

    goToCategory(item){
    	this.app.getRootNav().push(CategoryLayoutPage, {category: item});
    }
}
