import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

    explore: boolean = true;
    where_to_go: boolean = false;
    leisure: boolean = false;
    qatar: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }
  
    activeExplore(){
      this.explore = true;
      this.where_to_go = false;
      this.leisure = false;
      this.qatar = false;
    }
    activeWhereToGo(){
      this.explore = false;
      this.where_to_go = true;
      this.leisure = false;
      this.qatar = false;
    }
    activeLeisure(){
      this.explore = false;
      this.where_to_go = false;
      this.leisure = true;
      this.qatar = false;
    }
    activeQatar(){
      this.explore = false;
      this.where_to_go = false;
      this.leisure = false;
      this.qatar = true;
    }
}
