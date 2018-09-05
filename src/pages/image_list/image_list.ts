import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'image-list',
  templateUrl: 'image_list.html'
})
export class ImageListPage implements OnInit{
	
	items: any;

	constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {}

	ngOnInit() {
		this.UserService.apiTokenRequestGet('where_to_go', {})
	    .map(res => res.json()).subscribe(data => {
	    	//alert(JSON.stringify(data))
	    	this.items = data.data;
	    });
	}
}
