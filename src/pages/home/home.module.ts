import { HomePage } from './home';
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SuperTabsModule
  ],
  entryComponents: [
    HomePage
  ]
})

export class HomePageModule {}