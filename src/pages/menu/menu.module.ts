import { MenuPage } from './menu';
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
  declarations: [
    MenuPage
  ],
  imports: [
    IonicPageModule.forChild(MenuPage)
  ],
  entryComponents: [
    MenuPage
  ]
})

export class MenuPageModule {}