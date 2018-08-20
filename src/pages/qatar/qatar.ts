import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'qatar-list',
  templateUrl: 'qatar.html'
})
export class QatarPage {

    history: boolean = true;
    development: boolean = false;
    politics: boolean = false;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  	}

  	activeHistory(){
  		this.history = true;
  		this.politics = false;
  		this.development = false;
  	}
  	activeDevelopment(){
  		this.history = false;
  		this.politics = false;
  		this.development = true;
  	}
  	activePolitics(){
  		this.history = false;
  		this.development = false;
  		this.politics = true;
  	}
}
