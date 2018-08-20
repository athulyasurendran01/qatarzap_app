import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ImageListPage } from '../pages/image_list/image_list';
import { Leisure } from '../pages/leisure/leisure';
import { Explore } from '../pages/explore/explore';
import { QatarPage } from '../pages/qatar/qatar';
import { CategoryPage } from '../pages/categories/category';
import { CategoryDetailPage } from '../pages/category-detail/category-detail';
import { MapPage } from '../pages/map/map';
import { NewsBlog } from '../pages/news-blog/news-blog';
import { NewsDetail } from '../pages/news-detail/news-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ImageListPage,
    Leisure,
    QatarPage,
    Explore,
    CategoryPage,
    CategoryDetailPage,
    MapPage,
    NewsBlog,
    NewsDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ImageListPage,
    Leisure,
    QatarPage,
    Explore,
    CategoryPage,
    CategoryDetailPage,
    MapPage,
    NewsBlog,
    NewsDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
