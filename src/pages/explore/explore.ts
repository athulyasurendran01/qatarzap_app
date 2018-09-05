import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../app/user.service';
import { CategoryPage } from '../categories/category';

@Component({
  selector: 'explore-list',
  templateUrl: 'explore.html'
})
export class Explore implements OnInit{
	
	explore_items: any;

	constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {}

	ngOnInit() {

	    this.UserService.apiTokenRequestGet('categories', {})
	    .map(res => res.json()).subscribe(data => {
	    	//alert(JSON.stringify(data))
	    	this.explore_items = data.data;
	    });
	}

    goToCategory(item){
      this.navCtrl.push(CategoryPage, {
	      category: item,
		});
    }
}
