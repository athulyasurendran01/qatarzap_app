import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsDetail } from '../news-detail/news-detail';

@Component({
  selector: 'news-blog-list',
  templateUrl: 'news-blog.html'
})
export class NewsBlog {

	news: boolean = true;
    blog: boolean = false;

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
