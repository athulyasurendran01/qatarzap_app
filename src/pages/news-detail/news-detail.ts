import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsBlog } from '../news-blog/news-blog';
import { NewsMorePage } from '../news-detail-more/news-detail-more';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'news-detail-list',
  templateUrl: 'news-detail.html'
})
export class NewsDetail {
	
	newsdetail = [];
	category = '';
  serverurl = '';

  	constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
      this.serverurl = this.UserService.getServerURL()+'/images/news/';
  		this.category = this.navParams.get("category") ? this.navParams.get("category") : 1;

    	this.UserService.apiTokenRequestGet('getnewsbycategory/'+this.category, {})
        	.map(res => res.json()).subscribe(data => {
          	this.newsdetail = data.data;
      });
  	}

  goToBack(){
    this.navCtrl.push(NewsBlog);
	}

	newsReadMore(id){
    this.navCtrl.push(NewsMorePage, {
      news_id: id
    });
	}
}
