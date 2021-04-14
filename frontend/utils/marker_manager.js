import React from 'react'

export default class MarkerManager  {
  constructor(map){
    this.map = map;
    this.markers = [];
  }

  updateMarkers(mappings){
    mappings.forEach(mapping => {
      if (!this.markers[mapping.id]){
        const newMarker = {
          position: {lat: mapping.latitude, lng: mapping.longitude},
          map: this.map
        }
        this.markers[mapping.id] = new google.maps.Marker(newMarker)
        const marker = this.markers[mapping.id]
        marker.addListener('click', (e)=> {
          marker.setMap(null)
        })
      }
    });
    this.map.addListener('click', (e)=>{
      this.createNewMarker(e.latLng)
    })
  };

  createNewMarker(location){
    const marker = new google.maps.Marker({
      position: location,
      map: this.map
    })
    this.markers.push(marker)
  }
}
