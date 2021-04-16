
export default class MarkerManager  {
  constructor(map){
    this.map = map;
    this.markers = [];
    this.poly = new google.maps.Polyline({
      geodeisc: true,
      strokeColor: "#FF0000",
      strokeOpcaity: 1.0,
      strokeWeight: 2
    })
    this.poly.setMap(this.map)
    this.path = this.poly.getPath()
  }
  updateMarkers(mappings){
    this.map.addListener('click', (e)=>{
      this.createNewMarker(e.latLng)
      this.path.push(e.latLng)
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
  // deleteMarkers(){
  //   this.clearMarkers();
  //   this.poly.setMap(null)
  //   this.markers = [];
  // }

  undoMarker(){
    if (this.markers.length > 0){
      (this.markers.pop()).setMap(null)
      this.path.pop()
    }
  }
}