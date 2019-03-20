import { CategoryLayoutPage } from './categoryLayout';
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    CategoryLayoutPage
  ],
  imports: [
    IonicPageModule.forChild(CategoryLayoutPage),
    SuperTabsModule
  ],
  entryComponents: [
    CategoryLayoutPage
  ]
})

export class CategoryPageModule {}