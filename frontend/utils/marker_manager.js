
export default class MarkerManager  {
  constructor(map){
    this.map = map;
    this.markers = [];
  }
  updateMarkers(mappings){
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