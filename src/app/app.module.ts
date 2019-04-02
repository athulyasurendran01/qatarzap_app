import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserService } from './user.service';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LayoutPage } from '../pages/layout/layout';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { Explore } from '../pages/explore/explore';
import { ImageListPage } from '../pages/image_list/image_list';
import { Leisure } from '../pages/leisure/leisure';
import { QatarPage } from '../pages/qatar/qatar';
import { CategoryPage } from '../pages/categories/category';
import { CategoryLayoutPage } from '../pages/category_layout/categoryLayout';
import { CategoryDetailPage } from '../pages/category-detail/category-detail';
import { MapPage } from '../pages/map/map';
import { NewsBlog } from '../pages/news-blog/news-blog';
import { NewsDetail } from '../pages/news-detail/news-detail';
import { NewsMorePage } from '../pages/news-detail-more/news-detail-more';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ScrollHideDirective } from './scroll-hide';
import { SuperTabsModule } from 'ionic2-super-tabs';


@NgModule({
  declarations: [
    ScrollHideDirective,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LayoutPage,
    LoginPage,
    ListPage,
    Explore,
    ImageListPage,
    Leisure,
    QatarPage,
    CategoryPage,
    CategoryDetailPage,
    CategoryLayoutPage,
    MapPage,
    NewsBlog,
    NewsDetail,
    NewsMorePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
    menuType: 'overlay',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
    }),
    SuperTabsModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LayoutPage,
    LoginPage,
    ListPage,
    Explore,
    ImageListPage,
    Leisure,
    QatarPage,
    CategoryPage,
    CategoryDetailPage,
    CategoryLayoutPage,
    MapPage,
    NewsBlog,
    NewsDetail,
    NewsMorePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileTransfer,
    UserService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
