import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryLayoutPage } from '../category_layout/categoryLayout';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'news-detail-more-list',
  templateUrl: 'news-detail-more.html'
})
export class NewsMorePage {
	
	newsdetail = [];
	news_id = '';
  serverurl = '';

  	constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
      this.serverurl = this.UserService.getServerURL()+'/images/news/';
    	this.news_id = this.navParams.get("news_id") ? this.navParams.get("news_id") : 1;
    	this.UserService.apiTokenRequestGet('getnewsbyId/'+this.news_id, {})
        	.map(res => res.json()).subscribe(data => {
          	this.newsdetail = data.data;
      	});

  	}

  	goToBack(){
	  	this.navCtrl.push(CategoryLayoutPage);
	  }
}
