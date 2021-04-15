
export default class MarkerManager  {
  constructor(map){
    this.map = map;
    this.markers = [];
  }
  updateMarkers(mappings){
    this.map.addListener('click', (e)=>{
      this.createNewMarker(e.latLng)
    })
    const poly = new google.maps.Polyline({
      path: this.markers,
      geodeisc: true,
      strokeColor: "#FF0000",
      strokeOpcaity: 1.0,
      strokeWeight: 2
    })
    if (this.markers.length > 1){
      poly.setMap(this.map)
    }
  };
  createNewMarker(location){
    const marker = new google.maps.Marker({
      position: location,
      map: this.map
    })
    this.markers.push(marker)
  }
  setMapOnAll(map){
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  clearMarkers(){
    this.setMapOnAll(null)
  }
  deleteMarkers(){
    this.clearMarkers();
    this.markers = [];
  }

  undoMarker(){
    if (this.markers.length > 0){
      (this.markers.pop()).setMap(null)
    }
  };

}