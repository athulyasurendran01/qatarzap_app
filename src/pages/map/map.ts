import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../categories/category';

declare var google;

@Component({
  selector: 'map-list',
  templateUrl: 'map.html'
})
export class MapPage {

	@ViewChild('map') mapElement: ElementRef;
 	map: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  	}
  	ionViewDidLoad(){
	    this.loadMap();
	}

	loadMap(){
 
	    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
	 
	    let mapOptions = {
	      center: latLng,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	 
	    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	 
	}

	goToBack(){
		this.navCtrl.push(CategoryPage);
	}

}
