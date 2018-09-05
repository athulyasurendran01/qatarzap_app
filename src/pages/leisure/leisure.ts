import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'leisure-list',
  templateUrl: 'leisure.html'
})
export class Leisure implements OnInit{

	leisure_items: any;
  	
  	constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {}
  	
  	ngOnInit() {
  		this.UserService.apiTokenRequestGet('leisure', {})
	    .map(res => res.json()).subscribe(data => {
	    	//alert(JSON.stringify(data))
	    	this.leisure_items = data.data;
	    });
	}

}
