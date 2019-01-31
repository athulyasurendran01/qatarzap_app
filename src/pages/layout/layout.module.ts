import { LayoutPage } from './layout';
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    LayoutPage
  ],
  imports: [
    IonicPageModule.forChild(LayoutPage),
    SuperTabsModule
  ],
  entryComponents: [
    LayoutPage
  ]
})

export class LayoutPageModule {}