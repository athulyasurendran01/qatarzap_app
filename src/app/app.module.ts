import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserService } from './user.service';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LayoutPage } from '../pages/layout/layout';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { Explore } from '../pages/explore/explore';
import { ImageListPage } from '../pages/image_list/image_list';
import { Leisure } from '../pages/leisure/leisure';
import { QatarPage } from '../pages/qatar/qatar';
import { CategoryPage } from '../pages/categories/category';
import { CategoryDetailPage } from '../pages/category-detail/category-detail';
import { MapPage } from '../pages/map/map';
import { NewsBlog } from '../pages/news-blog/news-blog';
import { NewsDetail } from '../pages/news-detail/news-detail';
import { NewsMorePage } from '../pages/news-detail-more/news-detail-more';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { ScrollHideDirective } from './scroll-hide';
import { SuperTabsModule } from 'ionic2-super-tabs';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lan/', '.json');
}

@NgModule({
  declarations: [
    ScrollHideDirective,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LayoutPage,
    TabsPage,
    LoginPage,
    ListPage,
    Explore,
    ImageListPage,
    Leisure,
    QatarPage,
    CategoryPage,
    CategoryDetailPage,
    MapPage,
    NewsBlog,
    NewsDetail,
    NewsMorePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LayoutPage,
    TabsPage,
    LoginPage,
    ListPage,
    Explore,
    ImageListPage,
    Leisure,
    QatarPage,
    CategoryPage,
    CategoryDetailPage,
    MapPage,
    NewsBlog,
    NewsDetail,
    NewsMorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
