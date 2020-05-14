import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var google;

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {

  constructor(public http:HttpClient) { }

  response : any;
  map : any;
  marker : any;

  

  ionViewDidLoad(){}

  ngOnInit(){
    this.loadMap(1);
    console.log(this.response);
  }

  loadMap(t:number){
    
      const myLatLng = {
        lat: 25.6714,
        lng: -100.309
    };
  

    const mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    this.marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: "Hello World"
    });

  }
  searchFunction(searchValue : String){
    this.http.get('https://api.opencagedata.com/geocode/v1/json?q=' + searchValue + '&limit=1&key=5dde40031c504d4c875f7e8048516699').subscribe(response => {
      var rsp : any = response;
      var lat = rsp.results[0].geometry.lat;
      var lng = rsp.results[0].geometry.lng;
      this.moveMapCenter(lat, lng);
    });
    
  }

  moveMapCenter(latitude, long){
    const myLatLng = {lat: latitude,
                      lng: long}

    const mapEle : HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    this.marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: "Hello World"
    });

  }


}
