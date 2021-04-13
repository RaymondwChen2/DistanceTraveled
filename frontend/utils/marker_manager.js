import React from 'react'

export default class MarkerManager  {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(mappings){
    console.log('time to update');
  }

  createMarkerFromMapping(mappings){
    const position = new google.maps.LatLng(mappings.latitude, mappings.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      mappingId: mappings.id
    });
  }

  initMap(){
    const myLatLng = { lat: 37.73516, lng: -122.42936 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 30,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
}
