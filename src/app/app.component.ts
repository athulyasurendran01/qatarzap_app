import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ImageListPage } from '../pages/image_list/image_list';
import { Leisure } from '../pages/leisure/leisure';
import { QatarPage } from '../pages/qatar/qatar';
import { Explore } from '../pages/explore/explore';
import { LoginPage } from '../pages/login/login';
import { CategoryPage } from '../pages/categories/category';
import { CategoryDetailPage } from '../pages/category-detail/category-detail';
import { MapPage } from '../pages/map/map';
import { NewsBlog } from '../pages/news-blog/news-blog';
import { NewsDetail } from '../pages/news-detail/news-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'ImageListPage', component: ImageListPage },
      { title: 'Leisure', component: Leisure },
      { title: 'Login', component: LoginPage },
      { title: 'Qatar', component: QatarPage },
      { title: 'Category', component: CategoryPage },
      { title: 'CategoryDetail', component: CategoryDetailPage },
      { title: 'Map', component: MapPage },
      { title: 'NewsBlog', component: NewsBlog },
      { title: 'NewsDetail', component: NewsDetail },
      { title: 'Explore', component: Explore },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
