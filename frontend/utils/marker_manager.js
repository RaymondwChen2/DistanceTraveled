
export default class MarkerManager  {
  constructor(map){
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
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

  updateMarkers(){
    this.map.addListener('click', (e)=>{
      this.createNewMarker(e.latLng)
      this.path.push(e.latLng)
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    })
  };

  createNewMarker(location){
    const marker = new google.maps.Marker({
      position: location,
      map: this.map
    })
    this.markers.push({location: {lat : marker.position.lat(), lng : marker.position.lng()}, stopover: false})
  }

  setMapOnAll(map){
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }


  calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const waypts = this.markers
    let LatLng = `${waypts[0].location.lat}, ${waypts[0].location.lng}`
    const checkboxArray = document.getElementById("waypoints");
    // for (let i = 0; i < waypts.length; i++) {
    //   if (checkboxArray.options[i].selected) {
    //     waypts.push({
    //       location: waypts,
    //       stopover: true,
    //     });
    //   }
    // }
  
    directionsService.route(
      {
        origin: LatLng,
        destination: LatLng,
        waypoints: waypts,
        optimizeWaypoints: false,
        travelMode: google.maps.TravelMode.WALKING,
      },
      (response, status) => {
        if (status === "OK" && response) {
          directionsRenderer.setDirections(response);
          const route = response.routes[0];
          const summaryPanel = document.getElementById("directions-panel");
          summaryPanel.innerHTML = "";
  
          // For each route, display summary information.
          for (let i = 0; i < route.legs.length; i++) {
            const routeSegment = i + 1;
            summaryPanel.innerHTML +=
              "<b>Route Segment: " + routeSegment + "</b><br>";
            summaryPanel.innerHTML += route.legs[i].start_address + " to ";
            summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
            summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
          }
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }



















  clearMarkers(){
    this.setMapOnAll(null)
  }

  undoMarker(){
    if (this.markers.length > 0){
      (this.markers.pop()).setMap(null)
      this.path.pop()
    }
  }
}