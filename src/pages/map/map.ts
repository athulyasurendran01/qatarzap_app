import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../categories/category';
import { Geolocation } from '@ionic-native/geolocation';
import { UserService } from '../../app/user.service';

declare var google;

@Component({
  selector: 'map-list',
  templateUrl: 'map.html'
})
export class MapPage {

	@ViewChild('map') mapElement: ElementRef;
 	map: any;
 	category: number;
 	categories:any;
 	current_lat: number = 25.354826;
 	current_lng: number = 51.183884;

 	category_lat: number =  25.285446;
 	category_lng: number =  51.531040;

 	direction_type: string;

  	constructor(private UserService: UserService, private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {}

  	ionViewDidLoad(){

	  	this.category = this.navParams.get("category");
	  	this.getCategory();

	  	this.geolocation.getCurrentPosition().then((resp) => {
			this.current_lat = resp.coords.latitude;
			this.current_lng = resp.coords.longitude;
		}).catch((error) => {
		  	console.log('Error getting location', error);
		});

	    this.loadMap('DRIVING');
	}

	getCategory(){
		this.UserService.apiTokenRequestGet('category/'+this.category, {})
		.map(res => res.json()).subscribe(data => {
        	this.categories = data.data.package;
	      	this.category_lat = this.categories.lat;
	      	this.category_lng = this.categories.lng;
      	});
	}

	loadMap(type){
  		var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

	    let latLng = new google.maps.LatLng(25.354826, 51.183884);
	 
	    let mapOptions = {
	      center: latLng,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP,
	      disableDefaultUI: true,
	      zoomControl: true
	    }
	 
	    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	    directionsDisplay.setMap(this.map);

	    let origin = new google.maps.LatLng(this.current_lat, this.current_lng);
	    let destination = new google.maps.LatLng(this.category_lat, this.category_lng);

	    directionsService.route({
			origin: origin,
          	destination: destination,
          	travelMode: type
        }, function(response, status) {
	        if (status === 'OK') {
	            directionsDisplay.setDirections(response);
	        } else {
	            window.alert('Directions request failed due to ' + status);
	        }
        });
	}

	goToBack(){
		this.navCtrl.push(CategoryPage);
	}

	changeDirectionType(type){
		this.direction_type = type;
		this.loadMap(type);
	}

}
