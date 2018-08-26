import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsDetail } from '../news-detail/news-detail';

@Component({
  selector: 'blog-detail-list',
  templateUrl: 'blog-detail.html'
})
export class BlogDetailPage {

	news: boolean = false;
    blog: boolean = true;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  	}

  	activeNews(){
  		this.news = true;
  		this.blog = false;
  	}

  	activeBlog(){
  		this.news = false;
  		this.blog = true;
  	}

    newsDetail(){
      this.navCtrl.push(NewsDetail);
    }
}
