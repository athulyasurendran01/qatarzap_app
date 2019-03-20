import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryLayoutPage } from '../category_layout/categoryLayout';
import { NewsMorePage } from '../news-detail-more/news-detail-more';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'news-detail-list',
  templateUrl: 'news-detail.html'
})
export class NewsDetail {
	
	newsdetail = [];
	category = '';

  	constructor(private UserService: UserService,public navCtrl: NavController, public navParams: NavParams) {
  		this.category = this.navParams.get("category") ? this.navParams.get("category") : 'Shop';

    	this.UserService.apiTokenRequestGet('getnewsbycategory/'+this.category, {})
        	.map(res => res.json()).subscribe(data => {
          	this.newsdetail = data.data;
      	});
  	}

  	goToBack(){
	  	this.navCtrl.push(CategoryLayoutPage);
	}

	newsReadMore(){
		this.navCtrl.push(NewsMorePage);
	}
}
