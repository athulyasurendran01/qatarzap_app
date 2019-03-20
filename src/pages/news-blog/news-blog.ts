import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsDetail } from '../news-detail/news-detail';
//import { BlogDetailPage } from '../blog-detail/blog-detail';
import { UserService } from '../../app/user.service';

@Component({
  selector: 'news-blog-list',
  templateUrl: 'news-blog.html'
})
export class NewsBlog {

	news: boolean = true;
  blog: boolean = false;
  newsCategories = [];

  	constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
      this.UserService.apiTokenRequestGet('getnewscategory', {})
        .map(res => res.json()).subscribe(data => {
          this.newsCategories = data.data;
      });
  	}

  	activeNews(){
  		this.news = true;
  		this.blog = false;
  	}

  	activeBlog(){
  		this.news = false;
  		this.blog = true;
  	}

    newsDetail(id){
      this.navCtrl.push(NewsDetail, {
        category: id
      });
    }

    blogDetail(){
      //this.navCtrl.push(BlogDetailPage);
    }
}
