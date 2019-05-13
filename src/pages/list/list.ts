import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare var google;
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  GoogleAutocomplete : any;
  autocomplete: any;
  autocompleteItems: any;
  zone:any;
  geocoder:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }


  selectSearchResult(item){
    this.autocompleteItems = [];
    this.autocomplete.input = item.description;
  
    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        let position = {
            lat: results[0].geometry.location.lat,
            lng: results[0].geometry.location.lng
        };
      }
    })
  }


  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      predictions.forEach((prediction) => {
        this.autocompleteItems.push(prediction);
      });
    });
  }
}
