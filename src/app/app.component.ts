import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { NewsBlog } from '../pages/news-blog/news-blog';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  lang : string = "eng";

  pages: Array<{title: string, title_arabic:string, icon: string, component: any}>;

  constructor(public menuCtrl: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.lang = window.localStorage.language;
    this.initializeApp();

    this.pages = [
      { title: 'Profile', title_arabic: 'الشخصيه ', icon: "contact", component: ProfilePage },
      { title: 'About Us', title_arabic: 'من نحن  ', icon: "map", component: AboutPage },
      { title: 'Need Help?', title_arabic: 'تحتاج إلى مساعده  ', icon: "call", component: NewsBlog },
      { title: 'Locate Us', title_arabic: 'حدد موقعنا  ', icon: "compass", component: MapPage },
      { title: 'App Settings', title_arabic: 'إعدادات التطبيق  ', icon: "settings", component: ListPage },
      { title: 'Feedback', title_arabic: 'ردود الفعل  ', icon: "clipboard", component: ListPage },
      { title: 'Like This App', title_arabic: 'مثل هذا التطبيق  ', icon: "heart",component: ListPage },
      { title: 'Spread The World', title_arabic: 'نشر العالم  ', icon: "share", component: ListPage },
      { title: 'Rate Us On The App Store', title_arabic: 'قيّمنا على متجر التطبيقات  ', icon: "star-outline", component: ListPage },
      { title: 'Terms & Condition', title_arabic: 'الشروط والاحكام  ', icon: "contact", component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  goToLogin(){
    this.nav.setRoot(LoginPage);
    this.menuCtrl.close();
  }

  ChangeLanguage(evt){
    this.lang = evt.target.value;
    if(this.lang || (window.localStorage.language != 'eng')){
      window.localStorage.language = 'eng';
    }else{
      window.localStorage.language = 'arabic';
    }
    //window.location.reload();
  }
}
